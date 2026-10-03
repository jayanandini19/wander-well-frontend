import { createFileRoute } from "@tanstack/react-router";
import * as A from "@/components/AdminPages";
export const Route = createFileRoute("/admin/messages")({
  head: () => ({ meta: [{ title: "Admin messages — Wanderly" }, { name: "description", content: "Admin messages on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Admin messages — Wanderly" }, { property: "og:description", content: "Admin messages on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const C = A.adminConfigs.messages; return <C />; },
});
