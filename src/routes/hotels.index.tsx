import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/hotels/")({
  head: () => ({ meta: [{ title: "Hotels — Wanderly" }, { name: "description", content: "Hotels on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Hotels — Wanderly" }, { property: "og:description", content: "Hotels on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <P.ListingsPage type="hotels" />; },
});
