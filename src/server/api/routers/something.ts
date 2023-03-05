import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const authRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({ identifier: z.string() }))
    .query(({ input }) => {
      const identity = input.identifier;
      return null;
    }),
});
