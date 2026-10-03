import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "My profile — Wanderly" }, { name: "description", content: "My profile on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "My profile — Wanderly" }, { property: "og:description", content: "My profile on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <P.ProfilePage />; },
});
