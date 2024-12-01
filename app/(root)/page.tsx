import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

export default async function Home() {
  const session = await auth();

  const handleSignOut = async () => {
    "use server";
    await signOut({ redirectTo: ROUTES.SIGN_IN });
  };

  return (
    <>
      {session ? (
        <>
          <h1 className="font-space-grotesk text-3xl">
            Welcome to the world of Next.js! (Space Grotesk)
            <p> {JSON.stringify(session)}</p>
          </h1>

          <form action={handleSignOut} className="px-10 pt-[6.25rem]">
            <Button type="submit">Log Out</Button>
          </form>
        </>
      ) : (
        handleSignOut()
      )}
    </>
  );
}
