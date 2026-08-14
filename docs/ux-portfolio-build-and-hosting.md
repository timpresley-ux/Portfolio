# UX Portfolio: Build, Hosting & Launch Guide
### Companion to `ux-portfolio-strategy.md`

---

## 1. UI/UX Direction for the Site

At this career stage, the site itself is a craft signal — but restraint *is* the craft. Avoid anything that reads as a templated portfolio-builder.

- **Typography-led design.** Let a strong type system carry the visual weight instead of imagery/color. One distinctive header font, one clean workhorse body font.
- **No template feel.** Avoid stock "designer portfolio" Webflow/Framer templates — reviewers see hundreds of them. A custom-built static site (even simple) reads as more credible for someone claiming systems expertise.
- **Fast and lightweight.** Optimized images, minimal JS for what's essentially a content site. Load speed is itself a UX credential.
- **Minimal motion.** A subtle fade/reveal on scroll is fine. Avoid parallax, scroll-jacking, or "look what I can animate" flourishes — those read as junior.
- **Accessible by default.** Proper contrast ratios, semantic HTML, keyboard nav, alt text. For someone leading enterprise UX, an inaccessible portfolio is a credibility problem, not an oversight.
- **A small, quiet meta-flex.** Since your differentiator is design systems, consider building the site on a tiny token system (spacing scale, type scale, color tokens as CSS custom properties). No need to call it out — anyone who inspects the CSS will notice.
- **Dark/light mode: optional.** Only add it if genuinely well executed. A half-done toggle is worse than none.

---

## 2. Handling Confidential / NDA'd Work

**Hard rule: never post real company screens publicly**, even blurred or cropped — blurring is trivially reversible and doesn't provide real protection.

### What to do instead
- **Sanitize, don't smuggle.** Reskin UI patterns with placeholder branding, fictional data, and no company-identifying chrome (logos, internal product names, real proprietary workflows).
- **Recreate representative patterns, not the actual product.** Rebuilding a *type* of screen (e.g., a token-driven data table, a component pulled from your Storybook library in isolation) is lower-risk than a full product screen — it's closer to personal craft output than to disclosure.
- **Let narrative and diagrams carry the story.** The Tecton case study is fundamentally about architecture, governance, and process — tell most of it with diagrams you build yourself (alias chain, pipeline) rather than screenshots.
- **Confirm scope with legal/your manager, in writing if possible.** "No public screens" often still permits generic component libraries, architecture diagrams, and outcome descriptions.
- **Flag conflict-of-interest risk explicitly.** You're applying to companies that may be Halliburton clients or competitors (e.g., ExxonMobil) — confirm there's no issue describing Tecton's architecture to them, separate from the public-posting question.

---

## 3. Password Protection — Recommendation

**Don't gate the whole site.** A portfolio that requires a password to see *anything* reads as evasive and adds friction recruiters actively dislike.

Since real screens shouldn't be public regardless (see Section 2), you likely don't need password protection at all — there's nothing sensitive left to gate once visuals are genericized.

If you still want to hold something back (e.g., a deeper architecture doc, real metrics):
- Keep the **entire public site open** — narrative, outcomes, diagrams, POV.
- Gate only a **specific supplementary asset** (a PDF deep-dive, an offer to walk through it live) behind a "request access" link that emails you directly — not a static password recruiters have to hunt down.
- Or state plainly in the case study: *"Additional detail available on request or in interview."* This reads as judgment, not obstruction.

---

## 4. Hosting & Stack

| Option | Notes |
|---|---|
| **GitHub Pages** | Free, simple, fine for a static site, supports custom domains. Minimal moving parts. |
| **Vercel** | Best DX for Astro/Next.js — auto-deploys on push, fast CDN, generous free tier, easy custom domain + analytics. Recommended if you want more polish/interactivity later. |
| **Netlify** | Comparable to Vercel. Either is fine — pick one and move on. |

**Suggested framework:** Astro (fast, content-first, minimal JS by default) or 11ty for something even lighter. Both map cleanly onto the markdown case-study structure from the strategy doc.

**Custom domain:** register `firstlastname.com` or `firstlastname.design` (Namecheap, Google Domains, Cloudflare Registrar). A custom domain matters more for perceived credibility than the hosting platform choice.

### Suggested repo structure
```
/src
  /content
    /case-studies
      tecton-design-system.md
      ai-augmented-design-ops.md
      cross-domain-range.md
    about.md
  /pages
    index.astro
    resume.astro
    contact.astro
/public
  resume.pdf
  favicon.ico
  og-image.png
```

---

## 5. Launch Checklist — What's Easy to Forget

- [ ] **Resume PDF** kept in sync with portfolio narrative — mismatches between resume claims and portfolio depth are a red flag reviewers notice.
- [ ] **SEO / social meta tags** (title, description, OG image) so links render properly when pasted into LinkedIn or Slack.
- [ ] **Frictionless, non-scrapable contact method** — a simple form or obfuscated email, not a raw `mailto:` bots can harvest.
- [ ] **Light analytics** (Plausible, Fathom, or GitHub Pages' built-in) to confirm applications are converting to portfolio visits — nothing invasive.
- [ ] **Mobile testing** — test each case study at phone width specifically, not just the homepage.
- [ ] **"Last updated" discipline** — revisit every few weeks during active search; a stale portfolio undercuts a design-leadership pitch.
- [ ] **Optional personal project counterbalance** — a small, non-case-study note on outside craft (fiction writing, the Ashfront game prototype with the Claude API AI Commander) can round out the picture without diluting the professional case studies.
- [ ] **Print/PDF fallback** of your top case study for interview panels or internal recruiter circulation.
