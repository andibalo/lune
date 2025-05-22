
import { z } from 'zod'
import { router, publicProcedure } from '..';


const createProductSchema = z.object({

});

export const productRouter = router({
    createProduct: publicProcedure.input(createProductSchema).mutation(async ({ input, ctx }) => {
        return "createProduct";
    }),
    updateProductById: publicProcedure.input(createProductSchema).mutation(async ({ input, ctx }) => {
        return "updateProductById";
    }),
    deleteProductById: publicProcedure.input(createProductSchema).mutation(async ({ input, ctx }) => {
        return "deleteProductById";
    }),
    getProductById: publicProcedure.input(createProductSchema).query(async ({ input, ctx }) => {
        return "getProductById";
    }),
    getProductList: publicProcedure.input(createProductSchema).query(async ({ input, ctx }) => {
        return "getProductList";
    }),
});