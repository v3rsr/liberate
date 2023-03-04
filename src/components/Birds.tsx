import type { FC } from "react";

export const Birds: FC = () => {
  return (
    <>
      <img
        src="/img/twitter.png"
        className="fixed left-64 top-60 h-10 w-12 opacity-20"
      />
      <img
        src="/img/twitter.png"
        className="fixed top-[440px] left-32 h-16 w-20 opacity-40"
      />
      <img
        src="/img/twitter.png"
        className="w-26 fixed top-[680px] left-64 h-28 opacity-60"
      />
      <img
        src="/img/twitter.png"
        className="fixed right-64 top-60 h-10 w-12 -scale-x-100 opacity-20"
      />
      <img
        src="/img/twitter.png"
        className="fixed top-[440px] right-32 h-16 w-20 -scale-x-100 opacity-40"
      />
      <img
        src="/img/twitter.png"
        className="w-26 fixed top-[680px] right-64 h-28 -scale-x-100 opacity-60"
      />
    </>
  );
};
