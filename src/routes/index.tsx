import { createFileRoute } from "@tanstack/react-router";
import { ConsoleApp } from "@/components/console/app-shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ConsoleApp />;
}
