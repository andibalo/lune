import { Navbar } from "~/components/common/navbar";
import type { Route } from "./+types/home";
import { AppSidebar } from "~/components/common/sidebar";
import { useTRPC } from "~/lib/trpc";
import { QueryClient, useQuery } from "@tanstack/react-query";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home" },
  ];
}


export async function loader() {

  return {};
}


export default function Home() {
  const trpc = useTRPC();
  const userQuery = useQuery(trpc.healthCheck.queryOptions());

  return (
    <div>
      <Navbar />
      <p>{userQuery.data}</p>

    </div>
  );
}
