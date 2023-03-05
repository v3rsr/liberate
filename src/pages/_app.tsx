import localFont from "next/font/local";
import { Inter } from "next/font/google";

import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { WagmiConfig, createClient } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { env } from "../env.mjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";

// Setting up the font files used throughout the app
const calSans = localFont({
  src: "../../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const client = createClient(
  getDefaultClient({
    appName: "ConnectKit Next.js demo",
    alchemyId: env.NEXT_PUBLIC_ALCHEMY_ID,
    chains: [polygonMumbai],
  })
);

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main
      className={`${calSans.variable} font-sans ${inter.variable} font-inter`}
    >
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </main>
  );
};

export default api.withTRPC(MyApp);
