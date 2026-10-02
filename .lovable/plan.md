# Wanderly Complete Frontend

## Goal
Build a polished, responsive travel booking platform with realistic mock content, persistent browser state, connected customer journeys, and a separate admin workspace.

## Experience
- Use a bright editorial travel aesthetic: ocean blue, teal, warm gold, crisp white surfaces, rich photography, compact cards, and subtle motion.
- Provide responsive navigation, filter drawers, touch-friendly controls, stable card grids, and mobile admin navigation from 320px through large desktop.
- Keep every route populated with realistic data, clear loading/empty/error/success states, and purposeful actions.

## Customer Platform
- Shared site shell with session-aware navigation, notifications, footer, breadcrumbs, toasts, and mobile menu.
- Home, destinations, destination details, packages, package details, hotels, hotel details, flights, gallery, reviews, contact, and wishlist.
- Working search, filtering, sorting, favorites, gallery lightbox, review creation/editing/removal, and contact submission.
- Simulated registration, login, logout, user/admin roles, profile editing, and persisted state.
- Connected package, hotel, and flight booking flows through checkout, price summaries, validation, confirmation, and generated references.
- Itinerary builder with day timelines, activities, editing, deletion, reordering, places, notes, and saved additions from content pages.

## Admin Platform
- Responsive admin shell with sidebar/drawer and dashboard analytics.
- Populated management views for users, bookings, destinations, packages, hotels, flights, reviews, gallery, messages, and settings.
- Working search/filter/pagination plus add, edit, status, approve/reject, reply, and delete interactions using persisted mock state and confirmations.

## Technical Details
- TanStack Start file routes for every required URL, using shared React/TypeScript components and semantic Tailwind v4 tokens.
- Central typed mock-data module and browser-safe context store backed by localStorage.
- Reusable cards, forms, filters, booking controls, dialogs, tables, empty states, and responsive shells.
- Unique metadata for every content route; no backend, real payments, or third-party booking APIs.
- Verify route rendering, key flows, mobile and desktop layouts, console output, and current preview build diagnostics.
