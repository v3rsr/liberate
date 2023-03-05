import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { env } from "../../../../src/env.mjs";

export type Data = {
  handle: string;
};

const getHandle = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) => {
  const session = await getSession({ req });
  const token = await getToken({
    req,
    secret: env.NEXTAUTH_SECRET,
  });
  if (session && token) {
    res.status(200).json({ handle: token.username as string });
  }
  res.status(400).json(new Error("No session or token"));
};

export default getHandle;
