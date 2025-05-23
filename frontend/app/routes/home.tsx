import { Navbar } from "~/components/common/navbar";
import type { Route } from "./+types/home";
import { AppSidebar } from "~/components/common/sidebar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar/>

    </div>
  );
}
