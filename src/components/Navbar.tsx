import type { FC } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export const Navbar: FC = () => {
  const { data: session } = useSession();

  const handleLogin = () => {
    session ? void signOut() : void signIn();
  };
  return (
    <div className="flex items-center justify-center gap-4 py-10 md:justify-between md:px-24">
      <div className="flex flex-row gap-2 pl-2">
        <img src="/img/logo.png" className="flex h-7 w-8 " />
        <div className="font-sans text-2xl font-bold text-white">Liberate</div>
      </div>
      <div>
        <div
          onClick={handleLogin}
          className="hidden rounded-full bg-sky-500 px-10 py-2 text-sm text-slate-300 hover:bg-sky-700 md:block"
        >
          {session ? "Log Out" : "Log In"}
        </div>
      </div>
    </div>
  );
};
