import { createFileRoute } from "@tanstack/react-router";
import * as A from "@/components/AdminPages";
export const Route = createFileRoute("/admin/gallery")({
  head: () => ({ meta: [{ title: "Admin gallery — Wanderly" }, { name: "description", content: "Admin gallery on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Admin gallery — Wanderly" }, { property: "og:description", content: "Admin gallery on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const C = A.adminConfigs.gallery; return <C />; },
});
