import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/itinerary")({
  head: () => ({ meta: [{ title: "Itinerary planner — Wanderly" }, { name: "description", content: "Itinerary planner on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Itinerary planner — Wanderly" }, { property: "og:description", content: "Itinerary planner on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <P.ItineraryPage />; },
});
