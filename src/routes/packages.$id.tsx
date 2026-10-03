import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/packages/$id")({
  head: () => ({ meta: [{ title: "Package — Wanderly" }, { name: "description", content: "Package on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Package — Wanderly" }, { property: "og:description", content: "Package on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { const { id } = Route.useParams(); return <P.DetailPage key={id} type="package" id={id} />; },
});
