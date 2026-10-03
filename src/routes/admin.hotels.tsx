import { createFileRoute } from "@tanstack/react-router";
import * as A from "@/components/AdminPages";
export const Route = createFileRoute("/admin/hotels")({
  head: () => ({ meta: [{ title: "Admin hotels — Wanderly" }, { name: "description", content: "Admin hotels on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Admin hotels — Wanderly" }, { property: "og:description", content: "Admin hotels on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const C = A.adminConfigs.hotels; return <C />; },
});
