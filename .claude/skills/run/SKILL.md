---
name: run
description: Launch and verify the favorites Next.js bookmark app (dev server + Playwright screenshot). Use when asked to run, start, or screenshot this app, or confirm a UI change works.
---

# Running the favorites app

## Dev server

```bash
npm run dev > /tmp/dev.log 2>&1 &
timeout 30 bash -c 'until curl -sf http://localhost:3000 >/dev/null; do sleep 1; done'
```

- Port: 3000. No env vars or auth needed.
- Stop with `pkill -f "next dev"` before relaunching, or the next run hits `EADDRINUSE`.

## Driving the browser

`chromium-cli` is not installed in this environment. Use Playwright via a throwaway npm project in the scratchpad dir — don't add it to this project's own `package.json`:

```bash
cd <scratchpad-dir>
npm init -y >/dev/null 2>&1
npm install playwright@1       # first time only; cached afterward
npx playwright install chromium  # first time only
```

Then drive it with a small script:

```js
const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForSelector("text=초코프레스");
  await page.screenshot({ path: "screenshot.png" });
  console.log("ERRORS:", JSON.stringify(errors));
  await browser.close();
})();
```

Run with `node script.js` from the scratchpad dir, then view the PNG with the Read tool.

## Representative interaction

- Index (`/`): grid of bookmark cards renders.
- Click "+ 새 링크" in the header → navigates to `/new`.
- Click a folder name in the sidebar → navigates to `/folder/<id>`, showing only that folder's links with a colored `FolderBadge`.
- Visiting `/folder/<unknown-id>` renders Next's default 404 page.

## Gotchas

- This is Next.js 16 (App Router) with breaking changes vs. training data — check `node_modules/next/dist/docs/` for unfamiliar APIs (per `AGENTS.md`).
- `params` in page components is a `Promise` — must `await params` (see `app/folder/[folderId]/page.tsx`).
- All current pages are Server Components with no client-side state, so `console --errors` should always come back empty. A non-empty result means something regressed.
