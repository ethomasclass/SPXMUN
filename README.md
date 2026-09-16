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

## Adding the real logo

Replace `assets/img/crest-placeholder.svg` with the official crest, or add a
new image file (e.g. `assets/img/crest.png`) and update the `src` attributes
in each page's `<img class="crest">` / `<img class="crest-large">` tags.

## Adding a registration form

Once the Google Form is created, open `register.html` and replace the
placeholder notice with an `<iframe>` embed of the form (see the commented
example already in the file).
