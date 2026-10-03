import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/destinations/$id")({
  head: () => ({ meta: [{ title: "Destination — Wanderly" }, { name: "description", content: "Destination on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Destination — Wanderly" }, { property: "og:description", content: "Destination on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const { id } = Route.useParams(); return <P.DetailPage key={id} type="destination" id={id} />; },
});
