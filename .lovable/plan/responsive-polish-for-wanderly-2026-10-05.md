# Responsive polish for Wanderly

## Goal
Make the complete customer and admin experience comfortable and polished from 320px mobile screens through tablets and large desktops, without changing content or business behavior.

## Changes
- Refine the shared header and mobile menu so branding and actions fit cleanly at narrow widths.
- Scale page headings, spacing, image heights, search forms, cards, and booking controls for small screens.
- Reflow flight results, itinerary actions, profile details, gallery filters, confirmation actions, and review summaries where horizontal space is limited.
- Improve admin navigation, search controls, pagination, charts, forms, and table scrolling on mobile and tablet.
- Add safe global overflow and small-screen layout protections while preserving the existing Wanderly design.
- Verify representative customer, detail, booking, and admin pages at mobile, tablet, and desktop widths.

## Technical details
- Keep the current TanStack Start routes, shared store, mock data, and all existing interactions unchanged.
- Use responsive Tailwind utilities and semantic design tokens in the existing shared components.
- Retain intentional horizontal scrolling only inside admin data tables and compact navigation rows.
