import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import DiscordProvider from "next-auth/providers/discord";
import { env } from "../../../../src/env.mjs";
import type { AuthOptions } from "next-auth";

interface IProfile {
  data: Record<string, string>;
}

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: env.TWITTER_CLIENT_ID,
      clientSecret: env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    jwt({ token, profile }) {
      if (profile) {
        const userProfile = profile as IProfile;
        token.username = userProfile.data.username;
      }
      return token;
    },
  },
  secret: env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
