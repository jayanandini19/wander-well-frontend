import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/packages/")({
  head: () => ({ meta: [{ title: "Packages — Wanderly" }, { name: "description", content: "Packages on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Packages — Wanderly" }, { property: "og:description", content: "Packages on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <P.ListingsPage type="packages" />; },
});
