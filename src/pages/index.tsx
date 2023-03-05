import { type NextPage } from "next";
import Head from "next/head";
import { Birds } from "~/components/Birds";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { trpc } from "../utils/trpc";
import HeroBanner from "../components/HeroBanner";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Liberate</title>
        <meta name="description" content="Own your Twitter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#0C293F]">
        <Birds />
        <Navbar />
        <HeroBanner />
        <div>
          <div className="mx-16 mb-10 flex items-center justify-center"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
