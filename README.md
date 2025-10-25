# Wellness Mental Chat — Full Starter (Next.js 14 + Tailwind + Supabase + PayPal)

### Quick Start
1. `npm install` (or `pnpm i` / `yarn`)
2. `cp .env.example .env.local` and fill values
3. `npm run dev`

### Deploy (Vercel)
- Import this repo in Vercel (or Upload ZIP).
- Add env vars from `.env.example` in Project Settings → Environment.
- Build: `next build`, Start: `next start`

### Supabase
- Create project → copy URL & anon key.
- Run `supabase/schema.sql` in the SQL editor.

### PayPal
- Create a Subscription Plan → set `PAYPAL_PLAN_ID`.
- Fill `PAYPAL_CLIENT_ID`, `PAYPAL_SECRET`, `PAYPAL_ENV`.
- Use `/api/paypal/create-subscription` to create a checkout.

### Logo
- Replace `/public/logo.png` with your own logo file (PNG 512x512 recommended).

### Pages
- `/` (Landing), `/pricing`, `/faq`, `/privacy`, `/terms`, `/contact`, `/login`, `/dashboard`

