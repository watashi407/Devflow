import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

export default async function Home() {
  const session = await auth();

  // const handleSignOut = async () => {
  //   "use server";
  //   await signOut({ redirectTo: ROUTES.SIGN_IN });
  // };

  return <section>Hello world</section>;
}
