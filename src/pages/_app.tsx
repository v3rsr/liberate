import { type AppType } from "next/app";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

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

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`${calSans.variable} font-sans ${inter.variable} font-inter`}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
