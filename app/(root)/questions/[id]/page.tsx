import { notFound, redirect } from "next/navigation";
import React from "react";

import { auth } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";
import ROUTES from "@/constants/routes";
import { getQuestion } from "@/lib/actions/question.action";
import { RouteParams } from "@/types/global";

async function QuestionDetails({ params }: RouteParams) {
  const session = await auth();

  if (!session) return redirect("/sign-in");
  const { id } = await params;

  if (!id) return notFound();

  const { data: question, success } = await getQuestion({ questionId: id });
  if (!success) return notFound();

  if (question?.author.toString() !== session?.user?.id)
    redirect(ROUTES.QUESTION(id));
  return (
    <section>
      <h1 className="h1-bold text-dark100_light900 mb-7">Question Details</h1>

      {question && <QuestionCard question={question} isEdit />}
    </section>
  );
}

export default QuestionDetails;
