# Wanderwell Navigator

Build a complete, modern, responsive Travel & Tourism Booking Website using the frontend only.

Project Goal

Create a professional travel website where users can discover destinations, explore tour packages, view hotels and flights, create travel itineraries, read/write reviews, and manage their bookings.

The website must feel like a real production travel platform, not a simple demo or landing page.

Important: Build the COMPLETE FRONTEND/UI for all features. Do not leave placeholder pages, unfinished sections, empty buttons, or "coming soon" functionality.

Use realistic mock data throughout the application so every page looks populated and functional.

Technology & Design Requirements

Use React + TypeScript.

Use a modern component-based architecture.

Use Tailwind CSS.

Use reusable UI components.

Use responsive design for:

Desktop

Tablet

Mobile

Use a clean, premium travel aesthetic.

Use high-quality destination/travel imagery.

Use smooth hover effects and subtle animations.

Use cards, grids, modals, tabs, dropdowns, filters, forms, tables, badges, and responsive navigation where appropriate.

Use a consistent color palette inspired by travel/nature:

Primary: deep blue / ocean blue

Secondary: teal

Accent: orange/golden

Background: white/light gray

Use modern typography and good spacing.

Follow accessibility best practices.

Include loading states, empty states, validation messages, success messages, and error states.

Do not use broken images. Use reliable image URLs/placeholders if necessary.

MAIN WEBSITE

Create the following pages and functionality.

1. Home Page

Create a visually impressive travel homepage containing:

Responsive navbar

Logo: "Wanderly"

Navigation links:

Home

Destinations

Packages

Hotels

Flights

Itinerary

Gallery

Reviews

Contact

Login/Register buttons

User profile menu when logged in

Large hero section with travel background image

Hero heading such as:
"Explore the World, Create Unforgettable Memories"

Search widget containing:

Destination

Check-in / travel date

Check-out / return date

Number of travelers

Search button

Popular destinations section

Featured tour packages

Popular hotels

Why choose us section

Travel statistics

Customer testimonials

Photo gallery preview

Newsletter subscription section

Footer with:

About

Quick links

Destinations

Contact information

Social media icons

Newsletter

Copyright

2. User Registration

Create a complete registration page.

Fields:

Full name

Email

Phone number

Password

Confirm password

Country

Terms & Conditions checkbox

Include:

Form validation

Password visibility toggle

Password strength indicator

Error messages

Success state

Link to Login page

Since this is frontend-only, simulate registration using local/mock state.

3. User Login

Create a professional login page.

Fields:

Email

Password

Remember me

Forgot password

Login button

Also include:

Continue with Google UI

Continue with Facebook UI

Link to registration

Implement frontend authentication simulation.

Create different UI states for:

Logged out

Logged in

Admin logged in

Use mock authentication/localStorage so the UI behaves like a real application.

4. User Profile / Dashboard

Create a user dashboard after login.

Dashboard should include:

Welcome message

Profile information

Upcoming trips

Previous bookings

Saved destinations

Saved packages

Reviews written

Travel itinerary

Account settings

Logout

Allow users to edit their profile information through frontend forms.

5. Destination Listings

Create a dedicated /destinations page.

Display destinations in a responsive card grid.

Each destination card should contain:

Large image

Destination name

Country

Short description

Starting price

Rating

Number of reviews

"Explore" button

"Save" / favorite button

Include at least 12 realistic sample destinations such as:

Paris

Dubai

Bali

Maldives

London

Singapore

Tokyo

Switzerland

New York

Rome

Bangkok

Kerala

6. Destination Details

Create a dynamic destination details page.

Include:

Large image gallery

Destination title

Country

Rating

Description

Best time to visit

Average budget

Popular attractions

Things to do

Travel tips

Weather information UI

Recommended hotels

Recommended tour packages

Reviews

"Book Package" button

"Add to Itinerary" button

"Save Destination" button

7. Search & Filter

Create a powerful search/filter experience.

Users should be able to search by:

Destination

Country

Price range

Rating

Duration

Travel date

Category

Categories:

Adventure

Beach

Luxury

Family

Honeymoon

Cultural

Nature

Budget

Include:

Search bar

Filter sidebar on desktop

Filter drawer on mobile

Sort dropdown

Clear filters

Results count

No-results state

Filtering should actually work against the mock frontend data.

8. Tour Packages

Create /packages.

Each package card should contain:

Image

Package name

Destination

Duration

Starting price

Rating

Number of reviews

Short description

Included services

View Details button

Book Now button

Wishlist button

Add filtering and sorting.

9. Tour Package Details

Create a complete package details page.

Include:

Image gallery

Package title

Destination

Duration

Price

Rating

Reviews

Overview

Day-by-day itinerary

What's included

What's excluded

Hotel information

Transportation information

Meals

Activities

Cancellation policy

Important information

Customer reviews

Booking section should contain:

Number of travelers

Travel date

Room preference

Optional add-ons

Price calculation

Total price

"Book Now" button

Show a booking confirmation modal after booking.

10. Hotel Booking

Create /hotels.

Include hotel search:

Destination

Check-in

Check-out

Guests

Rooms

Search button

Hotel listing cards should show:

Hotel image

Hotel name

Location

Star rating

Guest rating

Number of reviews

Amenities

Room type

Price per night

Total price

View Details

Book Now

Filters:

Price

Star rating

Guest rating

Amenities

Property type

11. Hotel Details

Create a hotel details page containing:

Image gallery

Hotel name

Location

Star rating

Guest rating

Description

Amenities

Available rooms

Room images

Room price

Cancellation policy

Hotel policies

Reviews

Map/location UI

Booking widget

Booking widget:

Check-in

Check-out

Guests

Rooms

Room selection

Price summary

Taxes/fees

Total

Confirm Booking button

12. Flight Booking

Create /flights.

Build a realistic flight search UI.

Tabs:

Round Trip

One Way

Multi City

Fields:

From

To

Departure date

Return date

Passengers

Cabin class

Cabin classes:

Economy

Premium Economy

Business

First Class

Flight result cards should show:

Airline

Airline logo

Departure time

Arrival time

Duration

Stops

From/to airports

Price

Select Flight button

Filters:

Price

Airlines

Stops

Departure time

Arrival time

Duration

Add flight details and booking confirmation UI.

Use mock flight data; no real flight API is required.

13. Booking Checkout

Create a reusable checkout page/modal for hotel, flight, and package bookings.

Include:

Booking summary

Traveler information

Contact information

Payment UI

Price breakdown

Taxes

Discounts

Total

Confirm Booking button

IMPORTANT:
This is frontend-only. Do NOT implement real payment processing.

Use a simulated payment form and show a realistic booking-success screen after confirmation.

Generate a mock booking/reference number.

14. Travel Itinerary

Create /itinerary.

Users should be able to create and manage a trip itinerary.

Include:

Trip name

Destination

Start date

End date

Travelers

Day-by-day itinerary

Activities

Hotels

Flights

Notes

Allow users to:

Add activity

Edit activity

Delete activity

Reorder activities

Add notes

Add places

Save itinerary

Use a timeline-style interface.

Show:

Day 1

Day 2

Day 3

etc.

Include an "Add to Itinerary" action throughout destinations and packages.

15. Photo Gallery

Create /gallery.

Build a beautiful responsive photo gallery.

Features:

Masonry/grid layout

Destination categories

Search

Category filters

Image hover effects

Fullscreen image modal/lightbox

Previous/Next controls

Categories:

Beaches

Mountains

Cities

Adventure

Luxury

Culture

Nature

Use realistic travel images.

16. Reviews & Ratings

Create /reviews.

Include:

Overall rating

Rating breakdown

Review cards

User avatars

Destination/package name

Date

Star rating

Review text

Allow logged-in users to submit a review.

Review form:

Destination/package

Rating

Review title

Review text

Photo upload UI

Include frontend validation.

Allow users to edit/delete their own reviews in the UI.

17. Contact Page

Create /contact.

Include:

Contact form

Full name

Email

Phone

Subject

Message

Submit button

Also display:

Email

Phone

Office address

Business hours

Social links

FAQ section

After submitting, show a success message.

18. Wishlist / Favorites

Allow logged-in users to save:

Destinations

Tour packages

Hotels

Create a /wishlist page.

Display saved items with:

Image

Name

Price

Rating

Remove button

View details button

19. Notifications

Create a notification dropdown in the logged-in navbar.

Show sample notifications such as:

Booking confirmed

Upcoming trip reminder

Review approved

Special travel offer

Include read/unread states.

ADMIN PANEL

Create a completely separate responsive Admin Dashboard.

Admin route:

/admin

Create an admin sidebar containing:

Dashboard

Users

Destinations

Packages

Hotels

Flights

Bookings

Reviews

Gallery

Contact Messages

Settings

Logout

20. Admin Dashboard

Create dashboard statistics cards:

Total Users

Total Bookings

Total Revenue

Total Packages

Total Hotels

Total Destinations

Include charts:

Booking trends

Revenue trends

Popular destinations

Booking categories

Use mock data.

21. Admin User Management

Create a user management table.

Columns:

User

Email

Phone

Registration date

Role

Status

Total bookings

Actions

Actions:

View

Edit

Activate/Deactivate

Delete

Include:

Search

Filters

Pagination

Confirmation dialogs

22. Admin Booking Management

Create a booking management page.

Display:

Booking ID

Customer

Booking type

Destination

Date

Amount

Status

Created date

Actions

Statuses:

Confirmed

Pending

Cancelled

Completed

Allow admin to:

View booking

Update status

Cancel booking

Delete booking

23. Admin Package Management

Create package management.

Admin can:

View packages

Add package

Edit package

Delete package

Activate/deactivate package

Package fields:

Name

Destination

Description

Duration

Price

Images

Category

Inclusions

Exclusions

Itinerary

Rating

Status

Use modal or dedicated forms.

24. Admin Destination Management

Allow admin to:

Add destination

Edit destination

Delete destination

Upload/change image

Set country

Description

Attractions

Price range

Best time to visit

Status

25. Admin Hotel Management

Admin can:

Add hotel

Edit hotel

Delete hotel

Manage rooms

Manage prices

Manage amenities

Change availability/status

26. Admin Reviews Management

Admin can:

View reviews

Approve/reject reviews

Delete reviews

Search reviews

Filter by rating

27. Admin Gallery Management

Admin can:

Add images

Delete images

Assign category

Edit image title

Change image status

28. Admin Contact Messages

Create a contact message management page.

Admin can:

View messages

Mark as read/unread

Reply UI

Delete message

29. Admin Settings

Create settings sections for:

Website information

Contact information

Social media

Currency

Booking settings

Notification settings

Admin profile

DATA & FRONTEND BEHAVIOR

Because this is a frontend-only project:

Use realistic mock JSON/data objects.

Store frontend state using React state/context where appropriate.

Use localStorage for persistence where useful.

Simulate authentication.

Simulate bookings.

Simulate registration/login.

Simulate reviews.

Simulate wishlist.

Simulate itinerary management.

Simulate admin CRUD operations.

Do not require a real backend.

Do not require a real database.

Do not require real payment integration.

Do not require real flight/hotel APIs.

However, structure the code cleanly so a real backend/API can be connected later.

ROUTES

Implement proper frontend routing.

Required routes:

/

/login

/register

/profile

/destinations

/destinations/:id

/packages

/packages/:id

/hotels

/hotels/:id

/flights

/checkout

/itinerary

/gallery

/reviews

/wishlist

/contact

/admin

/admin/users

/admin/destinations

/admin/packages

/admin/hotels

/admin/flights

/admin/bookings

/admin/reviews

/admin/gallery

/admin/messages

/admin/settings

NAVIGATION & UX

Make sure all buttons and navigation links work.

Do not create dead buttons.

Examples:

"Explore" → destination details

"View Details" → relevant details page

"Book Now" → booking/checkout flow

"Add to Itinerary" → itinerary

"Save" → wishlist

"Login" → login page

"Register" → registration page

"View Booking" → booking details

"Manage" → relevant admin section

Add breadcrumbs on inner pages.

Add toast notifications for actions such as:

Saved to wishlist

Added to itinerary

Booking confirmed

Review submitted

Profile updated

Package deleted

User updated

RESPONSIVE REQUIREMENTS

The website MUST work properly at:

320px mobile

375px mobile

425px mobile

768px tablet

1024px laptop

1440px desktop

Large desktop screens

Mobile requirements:

Hamburger navigation

Mobile-friendly filters

Responsive cards

Horizontal scrolling where appropriate

Touch-friendly buttons

Responsive tables

Admin sidebar becomes mobile drawer

No horizontal overflow

Forms stack properly

UI QUALITY REQUIREMENTS

The final result should look like a professional commercial travel platform.

Avoid:

Plain HTML-looking pages

Excessive empty space

Generic default components

Unstyled forms

Broken layouts

Placeholder text such as "Lorem ipsum"

Empty sections

Non-functional buttons

Desktop-only layouts

Use:

Beautiful hero sections

Modern cards

Consistent shadows

Rounded corners

Professional icons

High-quality imagery

Smooth transitions

Clear visual hierarchy

Strong CTA buttons

Attractive dashboards

Professional tables

Helpful empty states

IMPORTANT FINAL REQUIREMENT

Build the entire website as a cohesive application, not as separate unrelated pages.

All frontend features must be connected through navigation and mock state.

Before finishing:

Check every route.

Check every navigation link.

Check every button.

Check forms and validation.

Check responsive behavior.

Check mobile navigation.

Check login/logout states.

Check admin navigation.

Check booking flow.

Check wishlist.

Check itinerary.

Check search and filters.

Check CRUD interactions in the admin panel.

Remove all broken/empty/placeholder functionality.

Make sure there are no console errors.

Prioritize a polished, production-quality frontend with realistic content and complete user flows.

The final application should feel like a complete travel booking platform named Wanderly.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://wander-well-frontend.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/12b912bd-c974-54ef-86fd-bacb5d8a7b23).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
