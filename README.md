# G Capital Resource — Corporate Website

A five-page, responsive corporate website starter for **G Capital Resource Pte. Ltd.** Built with Next.js App Router, React and TypeScript. The design uses the supplied G Capital logo as its visual reference and a restrained charcoal / champagne-gold palette.

## Pages

- `/` — Home
- `/about` — About Us
- `/services` — Investments, Trading, Mergers & Acquisitions
- `/approach` — Our Approach
- `/contact` — Contact form

## Tech stack

- Next.js 15 App Router
- React 19
- TypeScript
- CSS custom properties and responsive CSS (no UI framework required)
- Resend API for optional contact-form email delivery

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

The contact form intentionally does not pretend to send messages before it is configured. Add the email environment variables described below to enable delivery.

## Contact form configuration

Set these in `.env.local` for local testing and in the hosting provider's environment-variable settings for production:

```env
CONTACT_EMAIL=the-inbox-that-should-receive-enquiries@yourdomain.com
RESEND_API_KEY=re_your_resend_api_key
RESEND_FROM_EMAIL=G Capital Website <website@yourdomain.com>
NEXT_PUBLIC_SITE_URL=https://your-selected-domain.com
```

1. Create a Resend account and verify the sending domain.
2. Add the DNS records Resend provides at your domain registrar / DNS host.
3. Use a sender address on that verified domain for `RESEND_FROM_EMAIL`.
4. Set `CONTACT_EMAIL` to the real company inbox that should receive enquiries.
5. Test the form end-to-end before launch, including spam handling and reply-to behaviour.

Do not commit `.env.local` or expose `RESEND_API_KEY` in client-side code.

## Build and deploy

```bash
npm run typecheck
npm run build
npm run start
```

Recommended deployment: Vercel. Import this project from GitHub, set the environment variables, and deploy. A Node.js host that supports Next.js App Router and route handlers can also be used. Do not deploy as a static-only export while using the `/api/contact` route.

After choosing and registering a domain:

1. Add the domain in the hosting provider.
2. Configure the exact DNS records shown by the hosting provider (typically A/ALIAS and/or CNAME records).
3. Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS URL.
4. Enable HTTPS and choose one canonical hostname (`www` or apex); redirect the other to it.
5. Verify the contact-form sender domain with Resend.
6. Rebuild/redeploy and test all five pages on desktop and mobile.

## Brand assets

`public/gcapital-logo.jpg` is a crop of the supplied business-card image, retaining the dark background so it blends into the site. Replace it with an official transparent PNG or SVG master if one becomes available. Keep the proportions and do not recolour the logo without brand approval.

## Content and launch checks

- Confirm the company's approved description of its activities and the exact services it offers.
- Confirm the company contact email, phone number (if to be published), and any physical address before adding them.
- Confirm that all service descriptions accurately reflect the company's actual activities and any applicable licences / authorisations.
- Have Singapore legal/compliance counsel review the disclaimer and all investment-related wording before publication.
- Do not add performance claims, client logos, testimonials, investment products, regulatory status or claims of guaranteed returns unless independently substantiated and approved.
- Add a Privacy Notice and cookie/analytics notice if required by the final data collection and analytics setup.

## Project structure

```text
app/
  api/contact/route.ts    # server-side contact form handler
  about/page.tsx
  approach/page.tsx
  contact/page.tsx
  services/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  ContactForm.tsx
  Footer.tsx
  Header.tsx
  Icons.tsx
  Logo.tsx
  SectionHeading.tsx
public/
  gcapital-logo.jpg
```

## Notes for the developer

- Navigation and page content are editable in the route files and `components/Header.tsx`.
- Shared design tokens are at the top of `app/globals.css` (`--bg`, `--gold`, `--cream`, etc.).
- The current contact form has server-side validation and sends via Resend once configured. Add production-grade rate limiting / bot protection before significant public traffic.
- The logo crop is based on the uploaded card image. Request the original logo file for best production fidelity.
