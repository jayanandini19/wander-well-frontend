import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/flights")({
  head: () => ({ meta: [{ title: "Flights — Wanderly" }, { name: "description", content: "Flights on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Flights — Wanderly" }, { property: "og:description", content: "Flights on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <P.FlightsPage />; },
});
