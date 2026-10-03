import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/hotels/$id")({
  head: () => ({ meta: [{ title: "Hotel — Wanderly" }, { name: "description", content: "Hotel on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Hotel — Wanderly" }, { property: "og:description", content: "Hotel on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const { id } = Route.useParams(); return <P.DetailPage key={id} type="hotel" id={id} />; },
});
