# WellMart Winners Club — Landing Page

Animated landing page for the WellMart Winners Club 4-month prize draw, Kasaragod, Kerala.
Built with React 19, Vite, and GSAP (ScrollTrigger + `@gsap/react`).

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
```

The build uses relative asset paths, so `dist/` can be hosted on any static host, including GitHub Pages.

## Where things live

- `src/data.js` — every piece of client content: prizes per month, terms, contact details, WhatsApp links. Winner totals are computed from the prize lists, so editing a prize updates every count on the page.
- `src/components/` — one component per page section (`Hero`, `PrizeCalendar`, `GrandTotal`, `LiveDraw`, `FullPaymentOffer`, `Terms`, `Contact`, …).
- `src/hooks/usePointerFx.js` — reusable 3D tilt and magnetic-hover hooks.
- `src/lib/gsap.js` — registers GSAP plugins once and exports reduced-motion helpers.
- `src/styles.css` — all styles and design tokens.
- `src/assets/` — transparent logo and bag-mark PNGs cut from the client files.
- `wellmartS-*.jpeg` — original logo files supplied by the client.

All animation is skipped when the visitor has "reduce motion" enabled.
