import { router, publicProcedure } from '.';
import { authRouter } from './routes/auth';
import { productRouter } from './routes/product';

export const appTRPCRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "Ok"
  }),
  register: publicProcedure.mutation(async () => {
    return {
      message: "Register route",
    }
  }),
  product: productRouter,
  auth: authRouter
});

export type AppRouter = typeof appTRPCRouter;