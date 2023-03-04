import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="mx-auto my-40">
      <div className="rounded-2xl bg-transparent shadow-[30px_38px_100px_5px_rgb(0,254,162,0.25)]">
        <div className="w-full rounded-2xl bg-gradient-to-b from-white to-transparent p-[1px] shadow-[-51px_-11px_100px_5px_rgb(193,90,193,0.25)]">
          <div className="back flex h-full w-full items-center justify-center rounded-2xl bg-[#0C293F]">
            <div className="flex h-auto max-w-[765px] flex-col items-center justify-center p-20">
              <div className=" mb-5 font-sans text-5xl font-black text-white">
                Own your Twitter
              </div>
              <div className=" w-/5 text-md text-center font-inter text-slate-500	">
                Prevent your twitter handle, identity and tweet history from
                being taken away by storing all your past interactions locally.
              </div>
              <div className="mt-10"></div>
              <div className="rounded-full bg-sky-500 px-20 py-4 text-sm text-slate-300 hover:bg-sky-700">
                Log In
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
