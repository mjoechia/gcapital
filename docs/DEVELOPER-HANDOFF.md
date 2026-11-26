# G Capital Resource — Developer Handoff

## 1. Project objective

Create a premium, five-page corporate website for **G Capital Resource Pte. Ltd.** The website should communicate a measured, credible and internationally minded business identity without looking like a retail brokerage, crypto exchange or high-pressure investment solicitation site.

**Approved project choices**
- Visual direction: Luxury
- Scope: Five-page corporate website
- Technology: Selected by implementation team
- Domain: New domain required; final domain not yet selected
- Brand reference: User-supplied G Capital Resource logo/business-card image

## 2. Brand and art direction

### Core identity
- Deep charcoal / near-black backgrounds
- Champagne gold as the principal accent
- Warm ivory body text
- Editorial serif headlines paired with clean sans-serif body copy
- Fine gold rules, restrained geometric motifs, generous negative space
- Subtle transitions only; avoid flashy effects

### Suggested palette

| Token | Hex | Usage |
|---|---|---|
| Charcoal | `#111210` | Main page background |
| Deep charcoal | `#0C0D0B` | Footer |
| Graphite | `#1C1D19` | Panels and cards |
| Champagne gold | `#D7B45A` | Accent, links, key headings |
| Ivory | `#F0EDE5` | Light content sections |
| Muted text | `#AAA69B` | Secondary copy |

The palette is an interpretation of the supplied logo image, not a formal brand standards document. If the company has official colour values or vector artwork, use those as the final source of truth.

## 3. Information architecture and page intent

### Home (`/`)
- Hero: “Building value. Creating opportunities.”
- Intro to G Capital Resource
- Three service areas
- Investment philosophy statement supplied by the company
- Short approach preview
- Contact call to action

### About Us (`/about`)
- Company overview
- Identity and business philosophy
- Three guiding principles: clarity of objective, thoughtful evaluation, long-term perspective
- Company details: G Capital Resource Pte. Ltd.; UEN 201609920H; Singapore

### Our Services (`/services`)
- Investments
- Funding
- Mergers & Acquisitions
- Descriptive copy is intentionally broad and must be checked against actual business activities and regulatory permissions before launch.

### Our Approach (`/approach`)
- Understand the objective
- Examine the opportunity
- Consider the options
- Move with purpose
- Guiding principles: direction, discipline, relationships

### Contact Us (`/contact`)
- Contact enquiry form
- Name, work email, company, area of interest, message, consent
- Company name and UEN
- No physical address, phone number or email address is invented or published

## 4. Design and UX requirements

- Responsive at mobile, tablet and desktop widths
- Sticky desktop header and compact mobile navigation
- Clear keyboard focus states and skip-to-content link
- Respect `prefers-reduced-motion`
- Semantic headings and landmarks
- Descriptive image alternative text
- High contrast for navigation, form fields and calls to action
- Avoid autoplay video and intrusive popups

## 5. Implementation decisions

The implementation uses Next.js App Router, React, TypeScript and custom CSS. This is a pragmatic choice for a small corporate site: SEO-friendly server-rendered pages, a simple shared component system, and a server-side route for the contact form.

### Contact form integration
The `/api/contact` route validates submitted fields and sends an email using Resend. It requires:
- `CONTACT_EMAIL`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

The API returns a clear configuration error until these values are set; it does not silently claim that an enquiry has been sent. Add rate limiting and bot protection before production launch.

## 6. Domain strategy

The final domain is **not selected and availability has not been verified**. Recommended registration order:

1. `gcapital.sg` — concise Singapore presence, subject to availability and eligibility checks.
2. `gcapitalresource.com` — closest match to the registered company name and suitable for international recognition.
3. `gcapitalgroup.com` — suitable if the brand is intended to represent a wider group.
4. `gcapitalglobal.com` — international positioning.
5. `gcapital.com` — ideal short brand if obtainable, but it may already be registered or command a premium.

Suggested brand-protection registrations, subject to budget and availability: secure the chosen primary domain plus one matching alternative (for example, the `.sg` and `.com` versions). Avoid registering every variation before the primary brand/domain strategy is confirmed.

Before purchase, check availability and renewal pricing directly with an accredited registrar. For a `.sg` domain, check current SGNIC requirements and eligibility. The implementation currently uses `example.com` only as a safe metadata fallback; set `NEXT_PUBLIC_SITE_URL` to the registered canonical domain before launch.

## 7. Hosting and deployment

Recommended: Vercel with a GitHub repository. Any compatible Node.js host is acceptable.

1. Push project to a private or company-owned Git repository.
2. Import the repository into Vercel (or compatible host).
3. Set Node.js runtime supported by the selected Next.js release.
4. Configure the three contact-form environment variables and `NEXT_PUBLIC_SITE_URL`.
5. Configure domain DNS using the records supplied by the hosting provider.
6. Configure HTTPS and canonical host redirects.
7. Verify Resend sender domain and test form delivery.
8. Run `npm run typecheck` and `npm run build` before launch.

## 8. Pre-launch acceptance checklist

- [ ] Confirm all corporate and service descriptions with company management.
- [ ] Confirm whether any described activities are regulated and obtain compliance/legal review.
- [ ] Select and register a domain; confirm renewal price and registrant details.
- [ ] Obtain official logo artwork (preferably SVG or transparent PNG) and replace the screenshot crop if available.
- [ ] Set canonical site URL and production metadata.
- [ ] Configure and test contact email delivery.
- [ ] Add privacy notice and any required data-protection disclosures for enquiry data.
- [ ] Test on iOS Safari, Android Chrome, desktop Chrome, Safari and Edge.
- [ ] Check page titles, descriptions, social preview, favicon, robots and sitemap.
- [ ] Run accessibility, performance and security checks.
- [ ] Confirm no unapproved performance claims, endorsements, client logos or regulatory claims appear.

## 9. Regulatory/content caution

This is a corporate website implementation, not a legal or regulatory assessment. The company should verify that its public descriptions match its actual business and that any financial, investment, advisory, dealing or arranging activity is described and conducted only where permitted under applicable Singapore requirements. The general disclaimer included in the footer is not a substitute for legal review.
