import { createFileRoute } from "@tanstack/react-router";
import * as A from "@/components/AdminPages";
export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Admin settings — Wanderly" }, { name: "description", content: "Admin settings on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Admin settings — Wanderly" }, { property: "og:description", content: "Admin settings on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <A.AdminSettings />; },
});
