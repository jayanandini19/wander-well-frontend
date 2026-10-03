import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Travel gallery — Wanderly" }, { name: "description", content: "Travel gallery on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Travel gallery — Wanderly" }, { property: "og:description", content: "Travel gallery on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <P.GalleryPage />; },
});
