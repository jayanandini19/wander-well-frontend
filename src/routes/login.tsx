import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Wanderly" }, { name: "description", content: "Sign in on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Sign in — Wanderly" }, { property: "og:description", content: "Sign in on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <P.AuthPage mode="login" />; },
});
