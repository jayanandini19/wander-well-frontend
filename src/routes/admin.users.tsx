import { createFileRoute } from "@tanstack/react-router";
import * as A from "@/components/AdminPages";
export const Route = createFileRoute("/admin/users")({
  head: () => ({ meta: [{ title: "Admin users — Wanderly" }, { name: "description", content: "Admin users on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Admin users — Wanderly" }, { property: "og:description", content: "Admin users on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const C = A.adminConfigs.users; return <C />; },
});
