import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();

  // const handleSignOut = async () => {
  //   "use server";
  //   await signOut({ redirectTo: ROUTES.SIGN_IN });
  // };

  return (
    <section>
      <h1>Hello World</h1>
    </section>
  );
}
