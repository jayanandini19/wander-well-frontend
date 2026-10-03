import { createFileRoute } from "@tanstack/react-router";
import * as A from "@/components/AdminPages";
export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin dashboard — Wanderly" }, { name: "description", content: "Admin dashboard on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Admin dashboard — Wanderly" }, { property: "og:description", content: "Admin dashboard on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <A.AdminDashboard />; },
});
