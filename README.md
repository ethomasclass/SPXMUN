# SPX MUN II

Static website for SPX MUN II, St. Pius X Catholic High School's Model United
Nations conference. Built as a plain HTML/CSS site for GitHub Pages — no
build step required.

## Structure

- `index.html` — homepage
- `schedule.html` — conference day schedule
- `guides.html` — committee list linking to individual committee pages
- `committees/` — one page per committee with topic overview and background guide link
- `secretariat.html` — letter from the Secretary-General (placeholder)
- `delegate-guide.html` — delegate guide (placeholder)
- `register.html` — registration (placeholder; swap in a Google Form embed when ready)
- `assets/css/style.css` — shared styles (navy/gold theme)
- `assets/img/` — campus photo and crest

## Enabling GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Select the `main` branch (or whichever branch this is merged into) and `/ (root)` folder.
5. Save. The site will be published at `https://<org>.github.io/<repo-name>/`.

## Logo

The official SPX MUN crest lives at `assets/img/spxmun-logo.png` (used in the
nav bar and favicon) and `assets/img/spxmun-logo-large.png` (higher-resolution
version used in the homepage hero). Brand colors (navy `#0e2440`, gold
`#c8a24a`) are sampled from the logo and defined as CSS variables at the top
of `assets/css/style.css`.

## Adding a registration form

Once the Google Form is created, open `register.html` and replace the
placeholder notice with an `<iframe>` embed of the form (see the commented
example already in the file).
