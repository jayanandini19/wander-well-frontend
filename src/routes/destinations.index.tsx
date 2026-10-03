import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/destinations/")({
  head: () => ({ meta: [{ title: "Destinations — Wanderly" }, { name: "description", content: "Destinations on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Destinations — Wanderly" }, { property: "og:description", content: "Destinations on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <P.ListingsPage type="destinations" />; },
});
