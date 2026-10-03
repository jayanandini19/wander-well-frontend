import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Wanderly" }, { name: "description", content: "Checkout on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Checkout — Wanderly" }, { property: "og:description", content: "Checkout on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  validateSearch: (s: Record<string, unknown>) => ({ type: s["type"] ? String(s["type"]) : undefined, name: s["name"] ? String(s["name"]) : undefined, price: s["price"] ? Number(s["price"]) : undefined }),
  component: function Page() { return <P.CheckoutPage search={Route.useSearch()} />; },
});
