import { createFileRoute } from "@tanstack/react-router";
import * as A from "@/components/AdminPages";
export const Route = createFileRoute("/admin/destinations")({
  head: () => ({ meta: [{ title: "Admin destinations — Wanderly" }, { name: "description", content: "Admin destinations on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Admin destinations — Wanderly" }, { property: "og:description", content: "Admin destinations on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const C = A.adminConfigs.destinations; return <C />; },
});
