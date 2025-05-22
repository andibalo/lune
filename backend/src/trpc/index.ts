import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "Ok"
  }),

  register: publicProcedure.mutation(async () => {
    return {
      message: "Register route",
    }
  }),

});

export type AppRouter = typeof appRouter;