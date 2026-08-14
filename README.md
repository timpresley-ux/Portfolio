# Tim Presley UX Portfolio

A lightweight static portfolio focused on UX leadership, enterprise systems,
AI-enabled practice, and operational product design.

## Preview locally

From `D:\DEV\Port`:

```powershell
python -m http.server 4173
```

Open `http://127.0.0.1:4173`.

## Structure

- `index.html` — landing page, work index, about, resumes, and contact
- `case-studies/` — four public case-study pages
- `assets/` — favicon and public resume PDFs
- `styles.css` — shared design tokens, components, and responsive behavior
- `script.js` — navigation, contact, header, and restrained reveal behavior
- `resources/` — source briefs, reference material, and editable resume files;
  not intended for public deployment
- `docs/` — portfolio strategy and build guidance; not intended for public
  deployment

## Deployment

The public deployment should include only:

- `index.html`
- `case-studies/`
- `assets/`
- `styles.css`
- `script.js`

The site has no build step and can be hosted on GitHub Pages, Netlify, Vercel,
or any static host.

Before launch, add the final custom domain to canonical and Open Graph metadata,
create a domain-specific social preview image, and confirm that named company
and project references are approved for public use.

