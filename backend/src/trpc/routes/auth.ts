
import { z } from 'zod'
import { router, publicProcedure } from '..';


const schema = z.object({

});

export const authRouter = router({
    login: publicProcedure.input(schema).mutation(async ({ input, ctx }) => {
        return "login";
    }),
    register: publicProcedure.input(schema).mutation(async ({ input, ctx }) => {
        return "register";
    }),

});