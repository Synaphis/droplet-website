# Droplet Marketing Site

Next.js marketing site built around Droplet, a private skincare scanner and routine intelligence app.

## Structure

- `app/page.tsx` - one-page marketing experience with pricing and conversion sections.
- `app/privacy`, `app/terms`, `app/medical-disclaimer`, `app/support` - app store support and legal-readiness pages.
- `app/robots.ts`, `app/sitemap.ts` - technical SEO route discovery and indexing controls.
- `app/globals.css` - visual system and responsive styling.
- `public/brand-assets` - abstract brand illustrations for the homepage.
- `public/story-assets/product-silhouettes.svg` - final conversion illustration.
- `PRODUCT.md` - product understanding, audience, voice, and design principles.

## SEO

Set `NEXT_PUBLIC_SITE_URL` in production so metadata, sitemap, robots, and structured data emit the live canonical domain.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
