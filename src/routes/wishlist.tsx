import { createFileRoute } from "@tanstack/react-router";
import * as P from "@/components/CustomerPages";
export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — Wanderly" }, { name: "description", content: "Wishlist on Wanderly, your premium travel booking companion." }, { property: "og:title", content: "Wishlist — Wanderly" }, { property: "og:description", content: "Wishlist on Wanderly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: function Page() { return <P.WishlistPage />; },
});
