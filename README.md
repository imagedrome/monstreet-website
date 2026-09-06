# monstreet-website

Static company landing for [monstreet.com](https://monstreet.com) — same Beyo poster layout as Broong.com / Beyo.day, without Privacy Policy.

Brand names use Latin **Monstreet** only in metadata/JSON-LD. HTML + CSS only; email uses a click-time `mailto:` assembly.

## Deploy

Cloudflare Pages → this repo root. No build step.

## HTTPS / host hardening

- `_headers` — HSTS + basic security headers (Cloudflare Pages).
- `functions/_middleware.js` — 301 redirect `www.` → apex.

If `www` returns Cloudflare **522**, the hostname is not reaching this Pages project. In Cloudflare: Pages → Custom domains → add `www.<domain>`, or point `www` CNAME at the same Pages target as apex.
