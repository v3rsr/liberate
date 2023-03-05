import type { FC } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export const Navbar: FC = () => {
  const { data: session } = useSession();

  const handleLogin = () => {
    session ? void signOut() : void signIn();
  };
  return (
    <div className="flex items-center justify-between gap-4 py-10 px-24">
      <div className="flex flex-row gap-2 pl-2">
        <img src="/img/logo.png" className="flex h-7 w-8 " />
        <div className="font-sans text-2xl font-bold text-white">ElonDrop</div>
      </div>
      <div className="flex flex-row gap-10 font-inter">
        <div className="text-sm text-slate-500">Home</div>
        <div className="text-sm text-slate-500">Open Source</div>
        <div className="text-sm text-slate-500">Contributions</div>
      </div>
      <div>
        <div
          onClick={handleLogin}
          className="rounded-full bg-sky-500 px-10 py-2 text-sm text-slate-300 hover:bg-sky-700"
        >
          {session ? "Log Out" : "Log In"}
        </div>
      </div>
    </div>
  );
};
