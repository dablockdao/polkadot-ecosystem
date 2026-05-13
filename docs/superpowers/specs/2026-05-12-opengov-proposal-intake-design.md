# OpenGov Proposal Intake Page — Design

**Date:** 2026-05-12
**Repo:** polkadot-ecosystem (Astro + Starlight site at `dot-atlas/`)
**Author:** ss-deshmukh

## Goal

Add a styled, standalone page that embeds a third-party CryptPad form for collecting Polkadot OpenGov proposal submissions, and surface it through a new "OpenGov" subsection in the site's Community sidebar.

The form is hosted at:
`https://cryptpad.fr/form/#/2/form/view/He6J1TOYTxEfEFvElmckEW9N1BxcTRR7Sje68B4y+Ow/embed/`

## Non-Goals

- **No localized/i18n routes.** The existing `eco-library.astro` precedent is single-locale; this page matches.
- **No on-page intro copy, guidelines, or hero block.** User explicitly chose a minimal layout (page title + embed only).
- **No new top-level sidebar topic.** "Governance" does not become a 5th tab next to Tools/Dapps/Resources/Community.
- **No iframe-failure fallback UI.** Cross-origin load detection for iframes is unreliable; CryptPad is a stable third-party service.
- **No analytics on form submissions.** Submissions occur entirely within `cryptpad.fr`'s origin; we can only observe the page view (already covered by Vercel Analytics).
- **No restructuring of the existing `Tools → 🗳️ DAOs & Governance` block.** It stays exactly as it is today.

## Files

| Action | Path | Purpose |
|---|---|---|
| Create | `dot-atlas/src/pages/governance/proposal-intake.astro` | Standalone page using `<StarlightPage>` for site chrome; contains styled iframe |
| Modify | `dot-atlas/astro.config.mjs` | Add new `🗳️ OpenGov` subsection at the top of the `Community` sidebar items, containing a link to the new page |

No new CSS file. Styles are scoped to the page via an inline `<style>` block (the rule set is small enough — ~20 lines — that a separate file would be over-engineered for one page).

## URL and Page Structure

- **Route:** `/governance/proposal-intake/`
- **File:** `dot-atlas/src/pages/governance/proposal-intake.astro`
- **Wrapper:** `<StarlightPage>` from `@astrojs/starlight/components/StarlightPage.astro` (same import the eco-library page uses)
- **Frontmatter passed to `<StarlightPage>`:**
  - `title: 'OpenGov Proposal Intake'`
  - `description: 'Submit a Polkadot OpenGov proposal for review.'`
  - `tableOfContents: false`
  - `editUrl: 'https://github.com/dablockdao/polkadot-ecosystem/tree/main/dot-atlas/src/pages/governance/proposal-intake.astro'`
  - `lastUpdated: new Date()`
- **Body:** a single `<div class="proposal-intake not-content">` containing the iframe. The `not-content` class disables Starlight's prose styling on descendants, matching the eco-library pattern.

## Iframe Markup

```html
<iframe
  src="https://cryptpad.fr/form/#/2/form/view/He6J1TOYTxEfEFvElmckEW9N1BxcTRR7Sje68B4y+Ow/embed/"
  title="Polkadot OpenGov Proposal Intake Form"
  loading="lazy"
  sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
  allow="clipboard-write"
  referrerpolicy="strict-origin-when-cross-origin"
></iframe>
```

**Sandbox rationale:** CryptPad's form UI requires JS (`allow-scripts`), submits forms (`allow-forms`), uses its own auth/cookies (`allow-same-origin`), and embeds links that should open in new tabs (`allow-popups` + `allow-popups-to-escape-sandbox` so those new tabs aren't sandboxed). `allow-same-origin` together with `allow-scripts` is acceptable here because the iframe origin (`cryptpad.fr`) is different from the host site, so the iframe cannot escape its sandbox into our origin.

## Styling

Inline `<style>` block in `proposal-intake.astro`. Uses existing Starlight CSS variables so the container adapts to both light and dark themes:

```css
.proposal-intake {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.proposal-intake iframe {
  display: block;
  width: 100%;
  min-height: 1200px;
  height: calc(100vh - 180px);
  max-height: 1600px;
  border: 1px solid var(--sl-color-muted);
  border-radius: 10px;
  background: var(--sl-color-bg-soft);
}

@media (max-width: 768px) {
  .proposal-intake iframe {
    min-height: 900px;
    border-radius: 8px;
  }
}
```

**Design token rationale:**
- `border-radius: 10px` matches `expressiveCode.styleOverrides.borderRadius` set in `astro.config.mjs` (visual consistency with code blocks).
- `--sl-color-muted` and `--sl-color-bg-soft` are defined in `src/styles/custom.css` for both dark (root) and light (`[data-theme="light"]`) modes.
- The `min-height` + `calc(100vh - 180px)` + `max-height` ladder ensures the iframe is always tall enough to be usable, grows with the viewport, and doesn't get absurd on ultra-tall displays.

## Sidebar Change

In `dot-atlas/astro.config.mjs`, inside the `starlightSidebarTopics([...])` array, locate the Community topic block and update its `items` array.

**Before:**
```js
{
    label: 'Community',
    link: '/club/',
    icon: 'heart',
    items: [
        { label: '💰 Bounties',    collapsed: true, autogenerate: { directory: 'club/bounties' } },
        { label: '🌱 Initiatives', collapsed: true, autogenerate: { directory: 'club/initiatives' } },
        { label: '🏛️ Collectives', collapsed: true, autogenerate: { directory: 'club/collectives' } },
        { label: '👥 DAOs',        collapsed: true, autogenerate: { directory: 'club/daos' } },
        { label: '💼 Orgs',        collapsed: true, autogenerate: { directory: 'club/orgs' } },
        { label: '⚫️ Archive',    collapsed: true, autogenerate: { directory: 'club/archive' } },
    ]
}
```

**After:**
```js
{
    label: 'Community',
    link: '/club/',
    icon: 'heart',
    items: [
        // NEW: OpenGov at the top of Community
        { label: '🗳️ OpenGov', collapsed: true, items: [
            { label: '📝 Proposal Intake', link: '/governance/proposal-intake/' },
        ]},
        { label: '💰 Bounties',    collapsed: true, autogenerate: { directory: 'club/bounties' } },
        { label: '🌱 Initiatives', collapsed: true, autogenerate: { directory: 'club/initiatives' } },
        { label: '🏛️ Collectives', collapsed: true, autogenerate: { directory: 'club/collectives' } },
        { label: '👥 DAOs',        collapsed: true, autogenerate: { directory: 'club/daos' } },
        { label: '💼 Orgs',        collapsed: true, autogenerate: { directory: 'club/orgs' } },
        { label: '⚫️ Archive',    collapsed: true, autogenerate: { directory: 'club/archive' } },
    ]
}
```

The new `🗳️ OpenGov` entry uses the `items` form (not `autogenerate`) so we can mix manual link entries with autogenerated content if more OpenGov resources are added later. This mirrors the `Resources → Media` pattern already used in the same config.

## Data Flow

There is no data flow on the host side. A user:

1. Navigates to `/governance/proposal-intake/` (via the sidebar link or direct URL).
2. Astro serves the statically generated page (the site uses `output: 'static'`).
3. The browser loads the iframe from `cryptpad.fr`.
4. The user fills out and submits the form **inside the iframe**; the submission is handled entirely by CryptPad and never reaches this site's infrastructure.

## Build Sequence

1. Create `dot-atlas/src/pages/governance/` directory.
2. Create `dot-atlas/src/pages/governance/proposal-intake.astro` with `<StarlightPage>`, iframe markup, and scoped `<style>` block.
3. Edit `dot-atlas/astro.config.mjs` to add the new `🗳️ OpenGov` subsection at the top of the Community `items` array.
4. Run `npm run dev` from `dot-atlas/` and verify:
   - Sidebar shows `Community → 🗳️ OpenGov → 📝 Proposal Intake` at the top of the Community tab.
   - Clicking the link routes to `/governance/proposal-intake/`.
   - Page renders with the site's normal header, sidebar, and footer.
   - Page title reads "OpenGov Proposal Intake".
   - The CryptPad form embed loads and is interactive.
   - Form is responsive on mobile width.
   - Both light and dark themes look correct (toggle via Starlight theme switcher).
5. Run `npm run build` to confirm `astro check` and `astro build` pass with no errors.

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| CryptPad changes the embed URL or goes down → empty box on the page | Out of scope. CryptPad is a stable widely-used service. If it becomes a problem later, swap the iframe `src` or replace with a different form provider. |
| Sidebar restructure introduces a new nesting level under Community → users see other items in their previous order but with one new top entry | Acceptable. The OpenGov subsection is added at position 0 per user request; no existing items move or change. |
| Iframe is third-party — possible mixed-content or X-Frame-Options issues | CryptPad serves embedded forms over HTTPS and supports framing on the `/embed/` path. The sandbox attributes are tuned to what CryptPad needs. |

## Testing Plan

- **Visual / functional (dev server):** see "Build Sequence" step 4.
- **Build verification:** `npm run build` in `dot-atlas/` must complete without errors. The build runs `astro check` first, so any TypeScript/Astro frontmatter issues will surface there.
- **Responsive check:** Resize browser to mobile width (≤768px); iframe `min-height` should drop to 900px and border-radius shrink to 8px.
- **Theme check:** Toggle light/dark via Starlight's theme button. The iframe container border and background should swap correctly.

No automated tests are added; this site has no test suite, and the change is a static page + a config edit.
