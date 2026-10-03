import { createFileRoute } from "@tanstack/react-router";
import * as A from "@/components/AdminPages";
export const Route = createFileRoute("/admin/flights")({
  head: () => ({ meta: [{ title: "Admin flights — Wanderly" }, { name: "description", content: "Admin flights on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Admin flights — Wanderly" }, { property: "og:description", content: "Admin flights on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const C = A.adminConfigs.flights; return <C />; },
});
