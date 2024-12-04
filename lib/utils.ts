import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { techMap } from "@/constants/techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalized({ value }: { value: string }) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getDeviconClassName(techName: string) {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();
  return `${techMap[normalizedTechName]} colored` || "devicon-devicon-plain";
}
