import { signIn, signOut } from "@/auth";
import { Button } from "../ui/button";
import { Github, LogOut } from "lucide-react";

type SignInBtnProps = {
  cn?: string;
};
export const SignInBtn = ({ cn }: SignInBtnProps) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit" className={cn ? cn : ""}>
        <Github />
        Signin with GitHub
      </Button>
    </form>
  );
};

export const LogoutBtn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" variant={"destructive"}>
        <LogOut />
        Logout
      </Button>
    </form>
  );
};
