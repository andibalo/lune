import { Navbar } from "~/components/common/navbar";
import type { Route } from "./+types/home";
import { AppSidebar } from "~/components/common/app-sidebar";
import { useTRPC } from "~/lib/trpc";
import { QueryClient, useQuery } from "@tanstack/react-query";
import {
  SidebarInset,
  SidebarProvider,
} from "~/components/ui/sidebar"

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
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
              </div>
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
