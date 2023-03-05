import { FC, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { ConnectKitButton } from "connectkit";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { erc721ABI } from "wagmi";
import { InferGetServerSidePropsType } from "next";
import { type Data } from "~/pages/api/twitter/getHandle";

export const getServerSideProps = async () => {
  const res = await fetch("/api/twitter/getHandle");
  const handle: string = (await res.json()) as string;
  console.log(handle);

  return {
    props: {
      handle,
    },
  };
};

const Navbar: FC = () => {
  const { data: session } = useSession();
  const handleLogin = () => {
    session ? void signOut() : void signIn();
  };

  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const handle = fetch("/api/twitter/getHandle")
      .then((res) => res.json())
      .then((data: Data) => {
        setData(data.handle);
        setLoading(false);
      });
    setLoading(false);
  }, [data, isLoading]);

  // const handleConnect = (address: `0x${string}`) => {
  //   // const config = await prepareWriteContract({
  //   //   address: address,
  //   //   abi: erc721ABI,
  //   //   functionName: "approve",
  //   // });
  //   const data = await writeContract(confi  g);
  // };
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
              {!session && (
                <button
                  onClick={handleLogin}
                  className="rounded-full bg-sky-500 px-20 py-4 text-lg font-normal text-slate-300 hover:bg-sky-700"
                >
                  Reclaim your identity
                </button>
              )}
              {!!session && (
                <>
                  <img
                    src={session?.user?.image ?? ""}
                    alt="user image"
                    className="rounded-2xl"
                  />
                  <ConnectKitButton.Custom>
                    {({ isConnected, show, truncatedAddress, ensName }) => {
                      return (
                        <button
                          onClick={show}
                          className="mt-10 rounded-full bg-sky-500 px-20 py-4 text-lg font-normal text-slate-300 hover:bg-sky-700"
                        >
                          {isConnected && data !== ""
                            ? "Claim @" +
                              (data ?? "") +
                              " to " +
                              (ensName ?? truncatedAddress ?? "")
                            : "Claim @" + (data ?? "")}
                        </button>
                      );
                    }}
                  </ConnectKitButton.Custom>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
