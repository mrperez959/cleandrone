# CleanDrone

Bilingual (English / Spanish) marketing site for **CleanDrone**, a drone-based facade-cleaning service for buildings in Tampa Bay, Florida.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS
- Built-in i18n with `/en` and `/es` routes via middleware

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The middleware will redirect to `/en` or `/es` based on your browser language.

## Project structure

```
app/
  [locale]/           Localized layout + home page
  api/quote/          POST endpoint for the lead form
  components/         Hero, Benefits, Services, HowItWorks, Gallery, FAQ, QuoteForm, ...
i18n/
  config.ts           Locale list + helpers
  dictionaries.ts     Loader
  en.json / es.json   Translation strings
middleware.ts         Locale detection + redirect
```

## Lead capture

`POST /api/quote` accepts the quote form JSON. Today it logs the lead to the server console. To send it to an inbox or CRM, replace the `console.log` in `app/api/quote/route.ts` with a call to your provider of choice (Resend, SendGrid, Mailgun, Google Sheets, HubSpot, etc.).

## Deployment

Designed to deploy on [Vercel](https://vercel.com) with zero configuration. Push the branch, import the repo, and Vercel will build and host it. Custom domain (e.g. `cleandrone.com`) can be added from the Vercel dashboard.
