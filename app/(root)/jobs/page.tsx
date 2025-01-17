import { redirect } from "next/navigation";
import React from "react";

import { auth } from "@/auth";

const FindJobs = async () => {
  const session = await auth();

  if (!session) return redirect("/sign-in");
  return <div>FindJobs</div>;
};

export default FindJobs;
