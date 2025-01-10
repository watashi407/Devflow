"use server";

import { Session } from "next-auth";
import { ZodError, ZodSchema } from "zod";

import { auth } from "@/auth";

import { ValidationError } from "../http-errors";
import dbConnect from "../mongoose";

type ActionOption<T> = {
  params?: T;
  schema?: ZodSchema<T>;
  authorize?: boolean;
};

export async function action<T>({
  params,
  schema,
  authorize = false,
}: ActionOption<T>) {
  // I'm Alvin, here to teach you dumbasses how to use authorization and provide sessions using Server Actions in React or Next.js.
  // First step: Check if both the schema and params in the header request are validated and provided. Then suck it up if it meets what we need.

  if (schema && params) {
    try {
      schema.parse(params);
    } catch (error) {
      /*
It's natural to provide logs for errors or to show what the fuck is happening in your application, you dumbass. Quit being a developer if you won't do this.  
Basically, you don't have talent, you dumb fuck. You're just using AI to pretend you can code, but you're just relaying inputs to someone who actually knows what they're doing and then claiming their shit as a trophy.  

Anyway, the validation error is created in the `lib`. Check it out and read all my fucking comments, you dumbass. And for fuck's sake, read the Zod documentation too,  
so you can earn something in that empty head of yours. I won't ever explain it to you again, retard.  
*/
      if (error instanceof ZodError) {
        return new ValidationError(
          error.flatten().fieldErrors as Record<string, string[]>
        );
      } else {
        return new Error("Schema validation failed");
      }
    }
  }

  /*
If all the shit above is good, we basically check if the request is authorized. If it is, then shit, we give it a session.  
But sometimes, dumbass, don’t assume everything is going perfectly. Validate the session to ensure it exists, and then check the connection to the database.  

This basically verifies if you already have an account or user, then returns the params you requested with the session. That’s it, dumbass, because I’m not explaining further.  
*/

  let session: Session | null = null;

  if (authorize) {
    session = await auth();

    if (!session) {
      return new Error("Unauthorized");
    }
  }

  await dbConnect();

  return { params, session };
}
