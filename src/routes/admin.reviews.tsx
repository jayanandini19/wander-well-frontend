import { createFileRoute } from "@tanstack/react-router";
import * as A from "@/components/AdminPages";
export const Route = createFileRoute("/admin/reviews")({
  head: () => ({ meta: [{ title: "Admin reviews — Wanderly" }, { name: "description", content: "Admin reviews on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Admin reviews — Wanderly" }, { property: "og:description", content: "Admin reviews on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const C = A.adminConfigs.reviews; return <C />; },
});
