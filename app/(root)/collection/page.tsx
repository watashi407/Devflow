import { redirect } from "next/navigation";
import React from "react";

import { auth } from "@/auth";

const Collections = async () => {
  const session = await auth();

  if (!session) return redirect("/sign-in");
  return <div>Collections</div>;
};

export default Collections;
