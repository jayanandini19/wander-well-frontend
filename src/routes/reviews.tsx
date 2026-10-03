import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/reviews")({
  head: () => ({ meta: [{ title: "Traveler reviews — Wanderly" }, { name: "description", content: "Traveler reviews on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Traveler reviews — Wanderly" }, { property: "og:description", content: "Traveler reviews on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <P.ReviewsPage />; },
});
