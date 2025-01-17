import { redirect } from "next/navigation";
import React from "react";

import { auth } from "@/auth";

const Community = async () => {
  const session = await auth();

  if (!session) return redirect("/sign-in");
  return <div>Community</div>;
};

export default Community;
