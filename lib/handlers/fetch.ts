import { ActionResponse } from "@/types/global";

import logger from "../logger";
import handleError from "./error";
import { RequestError } from "../http-errors";

interface FetchOptions extends RequestInit {
  timeout?: number;
  maxRetries?: number;
  retryDelay?: number;
}

function isError(error: unknown): error is Error {
  return error instanceof Error;
}

export async function fetchHandlers<T>(
  url: string,
  options: FetchOptions = {}
): Promise<ActionResponse<T>> {
  const {
    timeout = 5000,
    headers: customHeader = {},
    maxRetries = 3, // Number of retries
    retryDelay = 1000, // Delay between retries in ms
    ...restOptions
  } = options;

  let attempt = 0;

  while (attempt < maxRetries) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const defaultHeaders: HeadersInit = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const headers: HeadersInit = { ...defaultHeaders, ...customHeader };

    const config: RequestInit = {
      ...restOptions,
      headers,
      signal: controller.signal,
    };

    try {
      const response = await fetch(url, config);

      clearTimeout(id);

      if (!response.ok) {
        throw new RequestError(
          response.status,
          `HTTP Error: ${response.status}`
        );
      }

      return await response.json();
    } catch (err) {
      clearTimeout(id);
      const error = isError(err) ? err : new Error("Unknown error");

      if (error.name === "AbortError") {
        logger.error(`Request to ${url} timed out`);
      } else {
        logger.error(`Error fetching data from ${url} : ${error.message}`);
      }

      if (attempt === maxRetries - 1) {
        return handleError(error) as ActionResponse<T>;
      }

      // Wait for retryDelay before the next attempt
      await new Promise((resolve) =>
        setTimeout(resolve, retryDelay * (attempt + 1))
      );
      attempt++;
    }
  }

  throw new Error("Max retries exceeded");
}

/*this latest/

// export async function fetchHandlers<T>(
//   url: string,
//   options: FetchOptions = {}
// ): Promise<ActionResponse<T>> {
//   const {
//     timeout = 5000,
//     headers: customHeader = {},
//     ...restOptions
//   } = options;

//   const controller = new AbortController();

//   const id = setTimeout(() => controller.abort(), timeout);

//   const defaultHeaders: HeadersInit = {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   };

//   const headers: HeadersInit = { ...defaultHeaders, ...customHeader };

//   const config: RequestInit = {
//     ...restOptions,
//     headers,
//     signal: controller.signal,
//   };

//   try {
//     const response = await fetch(url, config);

//     clearTimeout(id);

//     if (!response.ok) {
//       throw new RequestError(response.status, `HTTP Error: ${response.status}`);
//     }

//     return await response.json();
//   } catch (err) {
//     const error = isError(err) ? err : new Error("Unknown error");

//     if (error.name === "AbortError") {
//       logger.error(`Request to ${url} timed out`);
//     } else {
//       logger.error(`Error fetching data from ${url} : ${error.message}`);
//     }

//     return handleError(error) as ActionResponse<T>;
//   }
// }