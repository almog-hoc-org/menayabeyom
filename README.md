# Menaya BeYom · מניה ביום

A bilingual (Hebrew / English) landing & product site for **Menaya BeYom** — a financial-content brand that publishes **one focused stock idea every day**: clear thesis, key numbers, the real risk, and a disciplined bottom line.

> This content is for informational and educational purposes only and does not constitute investment advice.

## What's here

A fast, lightweight, dependency-free static site.

| File | Purpose |
|------|---------|
| `index.html` | Full single-page site (hero, today's stock card, format, archive, waitlist, disclaimer, footer). |
| `styles.css` | Premium editorial design system. Uses CSS logical properties so RTL/LTR flip automatically. |
| `i18n.js` | HE/EN language engine (visible `HE / EN` switcher, remembers choice), newsletter demo, scroll reveal. |
| `vercel.json` | Static hosting config (clean URLs, security headers, caching). |

## Sections

1. **Hero** — value prop, primary CTA "See today's stock", secondary "Join the daily list", editorial data visual (no stock photos).
2. **Today's Stock** — realistic sample card: ticker, sector, price, market cap, thesis bullets, key numbers, why now, main risk, bottom-line verdict, publish date.
3. **The Format** — the six repeating parts: Thesis · Numbers · Catalyst · Risk · Bottom line · Follow-up.
4. **Archive** — preview table of past ideas with date, ticker, one-line thesis, status tag, tracked performance.
5. **Join** — email waitlist with WhatsApp / Telegram interest.
6. **Disclaimer** — concise, professional, bilingual.

## Bilingual / RTL

- Visible `HE / EN` switcher in the header.
- Hebrew is native RTL (not translated-feeling); English is LTR.
- Direction and fonts swap via `html[lang]` / `html[dir]`; layout is built with logical properties so it mirrors cleanly.

## Local preview

Any static server works, e.g.:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Hosted on **Vercel** as a static site — no build step. Pushing to the connected branch triggers a deploy.

## Notes

All financial figures, tickers, and performance numbers are **placeholder / illustrative** data for design purposes.
