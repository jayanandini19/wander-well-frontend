import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/CustomerPages";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head:()=>({meta:[{title:"Wanderly — Extraordinary travel, beautifully planned"},{name:"description",content:"Discover curated destinations, packages, hotels and flights with Wanderly."},{property:"og:title",content:"Wanderly — Extraordinary travel, beautifully planned"},{property:"og:description",content:"Discover curated destinations, packages, hotels and flights with Wanderly."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
  component: HomePage,
});
