# BigBoss Corporate Consulting

Original BigBoss corporate website with a rebuilt Digital Solutions template collection integrated at `/digital-solutions`. This package is for local review and GitHub source control. No live deployment has been made.

The corporate site retains its original content, dark identity and B/suit logo, with new animated hero artwork and glass navigation. Digital Solutions retains white content areas and the V2 imagery, with seven interactive industry workspaces and two original V2 command-centre templates. Public previews use concise numbered template labels.

## Run locally on Windows

Install Node.js with npm if it is not already installed. Next.js 16 requires Node.js 20.9 or newer. This package was verified with Node.js 24.14.0 and npm 11.9.0.

1. Extract the ZIP to a normal folder, for example `C:\Projects\bigboss-updated`.
2. Open that extracted folder in VS Code. Open a PowerShell terminal in the folder containing `package.json`.
3. Run:

```powershell
npm.cmd ci
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000), then choose **Digital Solutions** in the navigation. Open [http://localhost:3000/digital-solutions](http://localhost:3000/digital-solutions) directly to review the updated page. Stop the server with **Ctrl+C**.

You can also double-click `RUN_LOCAL.bat`. It installs dependencies on the first run, then starts the local preview. `npm.cmd` avoids Windows PowerShell execution-policy restrictions on `npm.ps1`.

If port 3000 is already in use:

```powershell
npm.cmd run dev -- --port 3001
```

Then open [http://localhost:3001](http://localhost:3001). On macOS/Linux, use `npm` in place of `npm.cmd`.

## Verify the production build

```powershell
npm.cmd run test:pricing
npm.cmd run typecheck
npm.cmd run build
npm.cmd start
```

`build` and `dev` use Webpack for compatibility with the supplied V2 setup. `start` serves the built application locally; it does not publish the website.

`typecheck` generates Next.js route types first, so it also works from a freshly extracted source package before the first build.

## Optional digital enquiry delivery

The new digital form needs a configured JSON webhook to deliver online enquiries. Without it, the form reports that delivery is unavailable and offers BigBoss email and WhatsApp links.

```powershell
Copy-Item .env.example .env.local
```

Set `BIGBOSS_ENQUIRY_WEBHOOK_URL` in `.env.local` to your approved receiver and restart the server. The endpoint receives a POST containing `name`, `email`, `organisation`, `country`, `budget`, `start`, `details`, `service`, `source` and `receivedAt`. Do not commit `.env.local` or credentials. The original corporate Contact page is preserved separately.

## GitHub-ready contents

Upload the contents of the extracted `bigboss-updated` folder so `package.json` is at the repository root. Keep `package-lock.json`, `.gitignore`, `.env.example`, `app`, `public` and the configuration files. The ZIP excludes `node_modules`, `.next`, `.vercel`, Git history and secrets.

No Vercel project link or automatic deployment workflow is included. If an existing GitHub repository is already connected to a hosting service, pushing there may trigger its existing deployment settings; use a local checkout or an unconnected review repository while this remains a review-only update.

## Where to edit

- `app/data/digitalPricing.ts`: one numeric source for service prices, support plans and estimator calculations.
- `app/data/digital.ts`: digital service descriptions and plan features.
- `app/digital-solutions/page.tsx`: Digital Solutions content and enterprise delivery approach.
- `app/components/DashboardStudio.tsx`: template selection, application shell, filters, search, inspection and CSV export.
- `app/components/StudioViews.tsx` and `StudioPrimitives.tsx`: seven industry layouts and reusable visual components.
- `app/components/V2DashboardGallery.tsx`: two original V2 previews, full-size viewing and zoom.
- `app/data/studios.ts`: template definitions and preview metric baselines.
- `app/components/HeroScene.tsx`: procedural 3D geometry, pointer depth and glass hero panels.
- `app/studios.css`, `studio-refinements.css` and `hero-scenes.css`: workspace design, readable typography, glass navigation and hero styling.
- `app/components/DigitalArchitecture.tsx`: interactive example architecture pathways.
- `app/components/DigitalMotion.tsx`: progressive scroll reveals and reading progress, with reduced-motion support.
- `app/digital.css`, `app/digital-enhancements.css` and `app/digital-animation.css`: isolated Digital Solutions styling, animations and responsive navigation fixes.
- Original corporate page content and `app/globals.css`: retained from `bigboss-main`; marketing page heroes now include `HeroScene`.

Dashboard values are synthetic demonstrations. AI and GPU content describes an engagement approach subject to discovery; no NVIDIA affiliation or owned compute infrastructure is claimed.

See [ANIMATION_GUIDE.md](ANIMATION_GUIDE.md) for the exact old/new motion treatments, and [ASSET_CREDITS.md](ASSET_CREDITS.md) for reference and map-data notes.

See [CHANGE_NOTES.md](CHANGE_NOTES.md) for exact changes and before/after prices, and [VERIFICATION.md](VERIFICATION.md) for validation evidence and limits.
