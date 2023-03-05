import type { FC } from "react";

export const Birds: FC = () => {
  return (
    <>
      <img
        src="/img/twitter.png"
        className="fixed hidden h-10 w-12 opacity-20 lg:left-64 lg:top-60 lg:block"
      />
      <img
        src="/img/twitter.png"
        className="fixed top-[680px] left-16 h-16 w-20 opacity-40 lg:top-[440px] lg:left-32"
      />
      <img
        src="/img/twitter.png"
        className="w-26 fixed top-[780px] left-0 h-28 opacity-60 lg:top-[680px] lg:left-64"
      />
      <img
        src="/img/twitter.png"
        className="fixed hidden h-10 w-12 -scale-x-100 opacity-20 lg:right-64 lg:top-60 lg:block"
      />
      <img
        src="/img/twitter.png"
        className="fixed right-16 top-[680px] h-16 w-20 -scale-x-100 opacity-40 lg:top-[440px] lg:right-32"
      />
      <img
        src="/img/twitter.png"
        className="w-26 fixed right-0 top-[780px] h-28 -scale-x-100 opacity-60 lg:top-[680px] lg:right-64"
      />
    </>
  );
};
