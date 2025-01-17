import { redirect } from "next/navigation";
import React from "react";

import { auth } from "@/auth";
import { RouteParams } from "@/types/global";

async function QuestionDetails({ params }: RouteParams) {
  const session = await auth();

  if (!session) return redirect("/sign-in");
  const { id } = await params;
  return <div>QuestionDetails {id} </div>;
}

export default QuestionDetails;
