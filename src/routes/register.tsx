import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create account — Wanderly" }, { name: "description", content: "Create account on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Create account — Wanderly" }, { property: "og:description", content: "Create account on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <P.AuthPage mode="register" />; },
});
