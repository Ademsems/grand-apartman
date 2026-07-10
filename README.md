# Grand Apartman — Showcase Website

Bilingual (English / Slovak) marketing site for **Grand Apartman**, luxury vacation apartments in Podhajska, Slovakia.

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (reduced-motion aware)
- **Email:** Resend (via `/api/contact`)
- **Deployment:** Vercel (connect manually — see below)

---

## Adding photos

Photos are served directly from `/public/images/`. Drop any image file in the relevant folder and it will appear automatically — no code changes needed.

| Folder | Used in |
|---|---|
| `public/images/hero/` | Home page hero background |
| `public/images/apartments/studio-balcony/` | Studio Apartment gallery |
| `public/images/apartments/superior-balcony/` | Superior Apartment gallery |
| `public/images/apartments/apartment-three/` | Apartment Three gallery |
| `public/images/about/` | Reserved for future About section |

**Accepted formats:** `.jpg` `.jpeg` `.png` `.webp` `.avif` `.gif` (case-insensitive)  
**Sorting:** files are displayed alphabetically — prefix with `01_`, `02_` etc. to control order.  
**No build step required** — the server reads the folder at request time.

If a folder is empty (or the image fails to load), a tasteful branded placeholder is shown automatically. The site never shows a broken image.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```
RESEND_API_KEY=          # Get from https://resend.com/api-keys
CONTACT_TO_EMAIL=        # Where contact form submissions are delivered
CONTACT_FROM_EMAIL=      # Must be a verified Resend sender domain
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=  # Paste the full src URL from Google Maps embed dialog
```

- If `RESEND_API_KEY` or `CONTACT_TO_EMAIL` are missing, the contact form degrades gracefully with a mailto link — it will never crash.
- If `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` is empty, a "Map coming soon" placeholder is shown.
- The Google Maps embed is only loaded after the user accepts cookies (GDPR).

---

## Logo

The logo was generated from `Simon_logo_1.jpg` by running:

```bash
npm run logo
# or: node scripts/generate-logo.js
```

This produces:
- `public/logo.png` — transparent-background PNG for use on any background
- `public/favicon.ico` — 32×32 favicon
- `public/apple-touch-icon.png` — 180×180 Apple touch icon

If the source file is missing, the site falls back to an elegant text wordmark ("GRAND APARTMAN") and prints a console warning. Re-run the script any time you update the source logo.

---

## Review snapshot

The review score (9.9, 38 reviews) is a **manually captured snapshot** from Booking.com hardcoded in [`lib/data.ts`](lib/data.ts). Update it periodically:

```ts
export const REVIEW_SNAPSHOT = {
  overallScore: 9.9,
  reviewsCount: 38,
  note: "Couples rated the location 9.8",
  source: "Booking.com",
};
```

---

## Open TODOs before launch

- [ ] **Confirm contact email** — `CONTACT_EMAIL` in `lib/data.ts` is a placeholder (`info@grandapartman.sk`). Verify this is the real address.
- [ ] **Confirm phone number** — `CONTACT_PHONE` in `lib/data.ts` is a placeholder (`+421 ___ ___ ___`).
- [ ] **Add photos** — drop images into `/public/images/` folders (see above).
- [ ] **Set up Resend** — add API key + emails in Vercel env vars (or `.env.local`).
- [ ] **Add Google Maps embed URL** — get the embed src URL from Google Maps → Share → Embed a map.
- [ ] **Apartment Three** — add details to `lib/data.ts` once the apartment is ready.
- [ ] **Legal review** — have a Slovak legal advisor review `/privacy` and `/terms` before launch.
- [ ] **Domain** — connect `grandapartman.sk` to Vercel.
- [ ] **Booking.com affiliate link** — verify the `aid=964694` affiliate ID is correct.

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
npm run logo     # regenerate logo from source
```

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New Project** → import the repo.
3. Add environment variables (see above).
4. Deploy.

No special build configuration needed — Next.js is auto-detected.

---

## Content updates

All site copy lives in two files:

| File | What it contains |
|---|---|
| [`lib/data.ts`](lib/data.ts) | Apartment details, amenities, house rules, contact info, company legal details, location highlights, review snapshot |
| [`lib/i18n.ts`](lib/i18n.ts) | All UI strings in English and Slovak |

---

*Built by [DunajMedia](https://dunajmedia.com)*
