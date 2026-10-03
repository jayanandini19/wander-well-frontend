import { createFileRoute } from "@tanstack/react-router";
import * as A from "@/components/AdminPages";
export const Route = createFileRoute("/admin/bookings")({
  head: () => ({ meta: [{ title: "Admin bookings — Wanderly" }, { name: "description", content: "Admin bookings on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Admin bookings — Wanderly" }, { property: "og:description", content: "Admin bookings on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const C = A.adminConfigs.bookings; return <C />; },
});
