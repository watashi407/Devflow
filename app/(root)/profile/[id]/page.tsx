import { redirect } from "next/navigation";
import React from "react";

import { auth } from "@/auth";

const Profile = async () => {
  const session = await auth();

  if (!session) return redirect("/sign-in");
  return <div>Profile</div>;
};

export default Profile;
