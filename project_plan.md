# YAF Constructions Ltd — Project Plan

## 1. Project Description
YAF Constructions Ltd is a top-tier construction and architectural firm based in Accra, Ghana. The website targets government institutions, corporate bodies, and premium individuals. It showcases the firm's legacy projects, architectural services, and premium portfolio with an ultra-modern, high-end "Architectural Minimal" aesthetic.

## 2. Page Structure
- `/` — Home (single-page landing with all sections)
  - Hero (Full-bleed looping video, no overlay text)
  - Our Legacy (About + animated stats)
  - Services (3 service cards)
  - Portfolio (Horizontal-scroll gallery)
  - Contact (Lead-gen form with CTA)
- `/project/:id` — Project Detail (full project info, image gallery, testimonial)

## 3. Core Features
- [x] Full-bleed looping video hero (autoplay, muted, endless loop)
- [x] GSAP ScrollTrigger parallax effects and blur-to-clear text reveals
- [x] "Our Legacy" section with animated counter stats
- [x] Services section with bold grid layout (3 services)
- [x] Horizontal-scroll portfolio gallery
- [x] Contact form with "Request a Consultation" CTA
- [x] Custom premium cursor
- [x] Fixed navbar with scroll transparency effect
- [x] Professional footer
- [ ] Project detail pages with gallery and testimonials (in progress)

## 4. Data Model Design
No database needed. All content is static/marketing-focused using mock data.

## 5. Backend / Third-party Integration Plan
- Supabase: Not needed.
- Shopify: Not applicable.
- Stripe: Not applicable.

## 6. Development Phase Plan

### Phase 1: Core Landing Page (COMPLETE)
- Goal: Build the full single-page website with all 5 sections, GSAP animations, custom cursor, and contact form.
- Deliverable: A fully styled, animated, and responsive landing page.

### Phase 2: Project Detail Pages (IN PROGRESS)
- Goal: Build dedicated project detail pages linked from portfolio cards.
- Deliverable: Project detail page with full info, image gallery, client testimonial, and project specs.

### Phase 3: Enhancement & Polish
- Goal: Add SEO meta tags, optimize images, connect Supabase for form handling.
- Deliverable: Production-ready, optimized website.
