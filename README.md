# Spencer Shirah — Portfolio & Resume (MVP)

This is a static, single‑page portfolio site built with HTML + Tailwind (CDN) + vanilla JS.

## Quick Start
1. Open `index.html` in a browser.
2. Edit `data/projects.json` to update your projects.
3. Replace `assets/Spencer_Shirah_Resume.pdf` with your real resume PDF.
4. In the Contact form, replace `REPLACE_ME@example.com` with your email (for FormSubmit), **or** deploy on Netlify and use `data-netlify="true"`.

## Deploy — GitHub Pages
- Create a new repo and push the contents of this folder.
- In GitHub, enable **Settings → Pages → Deploy from branch → `main` / `/ (root)`**.
- Your site will appear at `https://<your-username>.github.io/<repo-name>/`.

## Deploy — Netlify
- Drag‑and‑drop this folder into the Netlify dashboard, or connect the GitHub repo.
- If you use Netlify Forms, change the `<form>` to:
  `<form name="contact" method="POST" data-netlify="true">` and add a hidden `<input type="hidden" name="form-name" value="contact">`.

## Customization
- Colors: Midnight Blue `#0B132B`, Auburn Orange `#DD6E42`, Light Gray `#EAEAEA`, Accent Teal `#00ADB5`.
- Fonts: Poppins (display) and Inter (body).
- Icons: Inline SVGs — replace with your preferred icon set if you like.

## Notes
- All styling uses Tailwind classes (via CDN). For advanced customization, install Tailwind locally and extend the config.
- `projects.json` structure is flexible; add `image` fields and render them in `app.js` if desired.
