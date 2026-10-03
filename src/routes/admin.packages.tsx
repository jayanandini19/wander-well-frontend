import { createFileRoute } from "@tanstack/react-router";
import * as A from "@/components/AdminPages";
export const Route = createFileRoute("/admin/packages")({
  head: () => ({ meta: [{ title: "Admin packages — Wanderly" }, { name: "description", content: "Admin packages on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Admin packages — Wanderly" }, { property: "og:description", content: "Admin packages on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const C = A.adminConfigs.packages; return <C />; },
});
