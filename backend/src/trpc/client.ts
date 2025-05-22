import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./router";

const client = createTRPCClient<AppRouter>({
	links: [
		httpBatchLink({
			url: "http://localhost:8000/trpc",
		}),
	],
});

async function main() {
	const result = await client.healthCheck.query();

	console.log(result); 
}

void main();
