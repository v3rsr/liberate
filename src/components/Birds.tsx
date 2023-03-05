import type { FC } from "react";

export const Birds: FC = () => {
  return (
    <>
      <img
        src="/img/twitter.png"
        className="fixed h-10 w-12 opacity-20 lg:left-64 lg:top-60"
      />
      <img
        src="/img/twitter.png"
        className="fixed h-16 w-20 opacity-40 lg:top-[440px] lg:left-32"
      />
      <img
        src="/img/twitter.png"
        className="w-26 fixed h-28 opacity-60 lg:top-[680px] lg:left-64"
      />
      <img
        src="/img/twitter.png"
        className="fixed h-10 w-12 -scale-x-100 opacity-20 lg:right-64 lg:top-60"
      />
      <img
        src="/img/twitter.png"
        className="fixed h-16 w-20 -scale-x-100 opacity-40 lg:top-[440px] lg:right-32"
      />
      <img
        src="/img/twitter.png"
        className="w-26 fixed top-[680px] h-28 -scale-x-100 opacity-60 lg:top-[680px] lg:right-64"
      />
    </>
  );
};
