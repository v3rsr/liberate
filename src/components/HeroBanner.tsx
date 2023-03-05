import { FC, useEffect, useState } from "react";
import { useSession, signIn, signOut, SessionContext } from "next-auth/react";
import { ConnectKitButton } from "connectkit";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { erc721ABI, useAccount, UseContractConfig } from "wagmi";
import { InferGetServerSidePropsType } from "next";
import { type IHandleData } from "~/pages/api/twitter/getHandle";
import jailBreaker from "../../utils/jailBreaker.json";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { useDisconnect } from "wagmi";
import Confetti from "react-confetti";

// const contractConfig: UseContractConfig = {
//   address: jailBreaker.address,
//   abi: jailBreaker.abi,
// };

const Navbar: FC = () => {
  const { data: session } = useSession();
  const handleLogin = () => {
    session ? void signOut() : void signIn();
  };

  const [handleData, setHandleData] = useState("");
  const [provider, setProvider] = useState("");
  const [isHandleLoading, setIsHandleLoading] = useState(false);
  const [contractError, setContractError] = useState(false);
  const [completedTransaction, setCompletedTransaction] = useState(false);
  const { address, isConnected } = useAccount();

  const { disconnect } = useDisconnect();

  const stringAdd = address as string;
  const truncAdd = stringAdd?.slice(0, 5) + "..." + stringAdd?.slice(-4);

  useEffect(() => {
    setIsHandleLoading(true);
    const handle = fetch("/api/twitter/getHandle")
      .then((res) => res.json())
      .then((data: IHandleData) => {
        setHandleData(data.handle);
        setProvider(data.provider);
        setIsHandleLoading(false);
      });

    setIsHandleLoading(false);
  }, [handleData, isHandleLoading]);

  const { config, error } = usePrepareContractWrite({
    address: jailBreaker.address as `0x${string}`,
    abi: jailBreaker.abi,
    functionName: "mint",
    args: [handleData, address],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const handleClaim = () => {
    try {
      write?.();
    } catch (e) {
      setContractError(true);
    } finally {
      setCompletedTransaction(true);
    }
  };

  return (
    <div className="my-20 mx-8 md:mx-auto md:my-40">
      {isSuccess && data && <Confetti />}
      <div className="rounded-2xl bg-transparent shadow-[30px_38px_100px_5px_rgb(0,254,162,0.25)]">
        <div className="w-full rounded-2xl bg-gradient-to-b from-white to-transparent p-[1px] shadow-[-51px_-11px_100px_5px_rgb(193,90,193,0.25)]">
          <div className="back flex h-full w-full items-center justify-center rounded-2xl bg-[#0C293F]">
            <div className="flex h-auto max-w-[765px] flex-col items-center justify-center p-8 md:p-20">
              <div className=" mb-5 text-center font-sans text-5xl font-black text-white">
                Own your Twitter
              </div>
              <div className=" w-/5 text-md text-center font-inter text-slate-500	">
                Prevent your twitter handle, identity and tweet history from
                being taken away by storing all your past interactions on the
                global blockchain.
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
                  {!isConnected && (
                    <ConnectKitButton.Custom>
                      {({ isConnected, show, truncatedAddress, ensName }) => {
                        return (
                          <button
                            onClick={show}
                            className="mt-10 rounded-full bg-sky-500 px-10 py-2 text-lg font-normal text-slate-300 hover:bg-sky-700 md:px-20 md:py-4"
                          >
                            {!isConnected &&
                              (provider === "twitter"
                                ? "Claim @" + (handleData ?? "")
                                : "Claim @" + (session?.user?.name ?? ""))}
                          </button>
                        );
                      }}
                    </ConnectKitButton.Custom>
                  )}
                  {isConnected && (
                    <button
                      onClick={
                        !data
                          ? handleClaim
                          : () => {
                              return;
                            }
                      }
                      className="mt-10 rounded-full bg-sky-500 px-10 py-2 text-lg font-normal text-slate-300 hover:bg-sky-700 md:px-20 md:py-4"
                    >
                      {isSuccess && data && "Claimed! Here's the proof: " && (
                        <a
                          href={`https://mumbai.polygonscan.com/tx/${
                            data?.hash ?? ""
                          }`}
                        >
                          View Transaction on PolygonScan
                        </a>
                      )}

                      {isLoading && "Your claim is being processed"}
                      {isConnected &&
                        !isLoading &&
                        !isSuccess &&
                        !data &&
                        (provider === "twitter"
                          ? "Claim @" +
                            (handleData ?? "") +
                            " to " +
                            (truncAdd ?? "")
                          : "Claim @" +
                            (session?.user?.name ?? "") +
                            " to " +
                            (truncAdd ?? ""))}
                    </button>
                  )}
                  {!!session && (
                    <button
                      onClick={!isConnected ? handleLogin : () => disconnect()}
                      className="mt-4 text-sm text-white"
                    >
                      {!isConnected ? "Sign Out" : "Disconnect Wallet"}
                    </button>
                  )}
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
