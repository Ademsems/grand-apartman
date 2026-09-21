# CLAUDE.md

Guidance for Claude Code (and any other agent) working in this repository.

## 1. Project & Business Context

**Grand Apartman** is a bilingual (EN/SK) marketing site for three luxury vacation apartments in **Podhájska, Slovakia**.

- **Client:** Simon & Anna Wheeler, operating as **Wheeler A&S s. r. o.** — IČO `57 092 036`, registered in the Commercial Register of the District Court Nitra, seat at Medvecké 3, 935 41 Plavé Vozokany, Slovak Republic. See `COMPANY_LEGAL` in [`lib/data.ts`](lib/data.ts).
- **Hosts:** Simon (English + Slovak) and Anna/Anka (Slovak + Hungarian) — a married couple who personally manage guest communication. Their story is told in full on [`/about`](app/about/AboutPageClient.tsx).
- **Agency:** [DunajMedia](https://dunajmedia.sk) built and maintains the site (credited in the footer).
- **Domain:** `grandapartman.sk`, hosted on Vercel. Contact email delivery via Resend.
- **Reputation anchor:** 9.9 / 10 on Booking.com (38 reviews) — a manually captured snapshot in `REVIEW_SNAPSHOT` (`lib/data.ts`), not a live API integration. Update it periodically by hand.

## 2. Tech Stack & Architecture

- **Framework:** Next.js 14 (App Router), TypeScript (strict mode)
- **Styling:** Tailwind CSS (custom palette + fonts — see §4)
- **Animations:** Framer Motion, wrapped in a reduced-motion-aware [`FadeIn`](components/FadeIn.tsx) component — use it for scroll reveals instead of raw `motion.div`
- **Email:** Resend, via [`app/api/contact/route.ts`](app/api/contact/route.ts)
- **Analytics:** Vercel Web Analytics (`@vercel/analytics/next`), mounted as `<Analytics />` in [`app/layout.tsx`](app/layout.tsx)
- **Deployment:** Vercel, auto-detected Next.js build — no custom build config

### Directory structure

This project does **not** use a `src/` directory — routes and code live at the repo root:

```
app/                      # App Router routes
  layout.tsx               # Root layout: fonts, providers, Header/Footer, <Analytics/>
  page.tsx                 # Home page
  about/                    # /about — hero, story, hosts, experience, CTA
  apartments/               # /apartments index + /apartments/[slug] detail pages
  contact/, privacy/, terms/
  api/contact/route.ts     # Resend-backed contact form endpoint
  sitemap.ts, robots.ts
components/                # Client components (Header, Footer, sections, galleries, forms)
lib/
  data.ts                   # Apartments, amenities, house rules, contact/legal info — single source of truth
  i18n.ts                   # Full EN/SK dictionary (dict.en / dict.sk), same key shape both languages
  LanguageContext.tsx        # useLang() — locale + t (translated dict), persisted to localStorage
  CookieContext.tsx          # useCookies() — consent state, gates the Maps embed
  getImages.ts               # Reads /public image folders at request time (see §3)
public/images/              # Apartment photos, about photo, hero — see §3
```

### i18n strategy

Lightweight, no routing/middleware — a single `Locale = "en" | "sk"` toggle stored in `localStorage` (`ga_locale`), not in the URL. `lib/i18n.ts` exports one `dict` object with matching `en`/`sk` keys; components read strings via `useLang().t`. Apartment-specific bilingual content (names, descriptions, bed/bath labels) lives in `lib/data.ts` instead, as `field` / `fieldSk` pairs on the `Apartment` type.

When adding new UI copy: add the key to **both** `dict.en` and `dict.sk` in the same call — never let one language fall behind.

## 3. Apartments & Asset Strategy

All three apartments **sleep 4** and only guest capacity is displayed — bed/mattress configuration is intentionally **not shown** in the UI (client preference) even though `beds` / `bedsSk` fields still exist on the data model for internal reference.

| Apartment | Slug | Image folder | Size | Booking.com link |
|---|---|---|---|---|
| Superior — Room 308 | `superior-balcony-308` | `Superior-Apartment-with-Balcony-308` | 32 m² | `MAIN_BOOKING_URL` (placeholder — TODO: room-specific anchor) |
| Studio 306 | `studio-balcony-306` | `Studio-Apartment-with-Balcony-306` | 28 m² | `#room_1304695902` |
| Superior — Room 301 | `superior-balcony-301` | `Superior-Apartment-with-Balcony-301` | 32 m² | `#room_1304695901` |

Display order across the whole site (home cards, `/apartments` index, `generateStaticParams`) is **308 → 306 → 301**, controlled purely by array order in `APARTMENTS` (`lib/data.ts`) — do not reorder without being asked, 308 is the best-seller and is meant to lead.

**`imageFolder` is decoupled from `slug`** — always resolve images via `apt.imageFolder`, never assume the folder name matches the URL slug.

### Image conventions (`lib/getImages.ts`)

- Reads `/public/images/<folder>` at request time — **no build step**, drop a file in and it appears.
- A file whose basename (case-insensitive, any extension) is exactly `thumbnail` is always sorted first — it becomes the cover image on home cards, the `/apartments` index, and the first slot in the detail-page gallery. All other images follow, alphabetically.
- If no `thumbnail` file exists, falls back to plain alphabetical order (no crash).
- Filenames are `encodeURIComponent`-escaped individually so spaces/parentheses in uploaded filenames (common with phone-exported photos) still resolve.
- Accepted extensions: `.jpg .jpeg .png .webp .avif .gif`.
- `/public/images/about/` holds a single photo for the About page; if empty, `AboutPageClient` must render its branded fallback rather than break.

**Robustness rule for this whole codebase:** missing images, missing env vars, or a missing Maps embed URL must never crash a build or a page — always degrade to a branded CSS/SVG placeholder or a sensible fallback (mailto link, "coming soon" copy, etc.). See `SafeImage.tsx` and the `/api/contact` route for the existing pattern to follow.

## 4. Design Tokens & Palette

Quiet-luxury palette, defined in `tailwind.config.ts` — always use these tokens, never hardcode hex values in components:

| Token | Hex | Use |
|---|---|---|
| `paper` | `#FBF8F2` | Page background |
| `cream` | `#F7F2EA` | Card background |
| `champagne` | `#EDE3D0` | Borders, dividers, subtle fills |
| `cappuccino` / `cappuccino-deep` | `#A67C52` / `#8A6440` | Secondary text, hover states |
| `gold` / `gold-deep` | `#C6A769` / `#B08D4F` | Accents, CTAs, highlight numerals |
| `espresso` / `espresso-soft` | `#2A231C` / `#4A4038` | Dark sections (footer), primary text |

**Typography:** `font-serif` → Cormorant Garamond (headings, display numerals), `font-sans` → Jost (body, labels/eyebrows, usually `tracking-wide`/`uppercase` for small labels). Both are loaded as `next/font/google` variables in `app/layout.tsx` — don't add other font imports.

**Motion:** section reveals use `FadeIn` (respects `prefers-reduced-motion`); don't introduce a second animation pattern for the same purpose.

### Wording conventions

- Brand name **"Grand Apartman"** is never translated.
- The Podhájska thermal facility is referred to as **"Thermal Baths"** in English and **"Termálne Kúpalisko"** in Slovak — not "spa"/"kúpele" alone. This was a deliberate site-wide rename; keep it consistent in any new copy.
- Guest capacity is always phrased as "Sleeps N" (EN) / the Slovak equivalent already in `dict.sk.apartments` — do not reintroduce bed-configuration copy per §3.

## 5. Analytics & Integrations

- **Vercel Web Analytics** — `@vercel/analytics/next`, `<Analytics />` mounted once in `app/layout.tsx` inside `<body>`, alongside the language/cookie providers and `CookieBanner`. No additional config needed; it activates automatically on Vercel deploys.
- **Resend** — `app/api/contact/route.ts` reads `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` **from environment variables only**, never hardcoded. If any are missing it returns `{ ok: false, unconfigured: true }` with a 200 rather than throwing, and the client falls back to a `mailto:` link — preserve this contract if you touch the route.
- **Google Maps** — the iframe embed URL comes from `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` (also env-only) and is only rendered after the visitor accepts the cookie banner (`useCookies()` from `CookieContext.tsx`); before consent or without the env var, a "Map coming soon" / placeholder state is shown.
- Real secrets live in Vercel project env vars, not in this repo. Only `.env.example` (no real values) is ever committed — never commit a populated `.env` or `.env.local`.

## 6. Agency Standard Workflow

- **Before every commit:** run `npm run build` and `npm run lint` and confirm both are clean (0 errors, 0 TypeScript errors). Don't commit on a red build.
- **Git routine:** stage intentionally (avoid `git add -A` when untracked files might be scratch/config noise), then `git commit -m "..."` and `git push`.
- Prefer small, verifiable commits with imperative, present-tense messages (`feat: ...`, `fix: ...`) consistent with existing history (`git log --oneline`).
- This repo has no automated test suite — "verified" means a clean `build`/`lint` plus manual check in the browser (`npm run dev` at `http://localhost:3000`) for anything UI-visible, especially bilingual copy (check both EN and SK) and the 360px mobile breakpoint.
