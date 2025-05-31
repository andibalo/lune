import { createTRPCContext } from '@trpc/tanstack-react-query';
import type { AppRouter } from '../../../backend/src/trpc/router';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
 
export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();

export const createTrpcClient = (): ReturnType<typeof createTRPCClient<AppRouter>> => {
  return createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: import.meta.env.VITE_BE_TRPC_URL,
      }),
    ],
  });
}