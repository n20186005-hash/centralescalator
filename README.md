# Central–Mid-Levels Escalators guide

Traditional Chinese and English pages use the existing Astro server/prerendered architecture and shared typed home/topic content. The site is an independent, unofficial, nonprofit tourism and educational guide, not the operator.

Use Node 24.18.1 and pnpm 12.4.2. Keep all exact dependency versions and pnpm-lock.yaml. Normal installation: `pnpm install --frozen-lockfile`. Checks: `pnpm run check`; historical production build: `npm run build`. Default deployment uses `npx wrangler deploy` and the adapter-generated config for existing project `centralescalator`, preserving SESSION/IMAGES/ASSETS. No new domain bindings are declared. The source Worker wrapper is compiled before adapter asset handling. Local preview after building: `pnpm exec wrangler dev --ip 127.0.0.1 --port 8949 --local`.

Content sources are linked on every normal page. Transport Department and Tourism Board pages differ on the uphill start (10:00 versus 10:20); neither difference proves a system-wide shutdown. They agree on downhill 06:00–10:00 and the Queen’s Road Central–Conduit Road route. No fixed walking-time circle or surveyed accessible route is promised.

The original GA consent storage key and yes/no values remain. Refusal disables the loaded runtime immediately; saved refusal reloads. Grants require verified storage readback, and a per-tab veto protects refusals. Storage failures remain visibly unsaved and off. These controls do not govern independent hosting measurement.

## Historical image

Only **Inside the Central-Mid-Levels escalators.jpg**, Mx. Granger, 2019-06-12, is used. Exact source: https://commons.wikimedia.org/wiki/File:Inside_the_Central-Mid-Levels_escalators.jpg . Licence: https://creativecommons.org/publicdomain/zero/1.0/ . Local full interior variant is resized/recompressed; hero and social variants crop the lower steps/handrails from the same original. Visible credits identify the historical date and modifications. No blanket clearance of other depicted subject rights is claimed. The former crowd/advertising hero and its OG composition are retired.

The build removes local machine root paths from deliverable modules, leaving necessary local generated Wrangler configuration metadata. Production exact-commit, required host entrances, browser layout, images and analytics network observations remain separate acceptance gates.
