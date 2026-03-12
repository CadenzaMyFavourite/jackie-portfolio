# Personal Portfolio

This repository contains a polished single-page developer portfolio for Jackie Zou. It is structured with best practices in mind:

- **HTML** separated into `index.html`.
- **CSS** in `css/styles.css` (Tailwind + custom global rules).
- **JavaScript** in `js/main.js` (navigation logic, theme toggle, project card interactions).
- **Assets** folder for images, resume, etc.

## Features implemented

1. **Homepage dashboard**: large grid‑based blocks that navigate to sections. Each tile (About, Projects, Skills, Resume, Contact) features a title, subtitle, hover lift animation, subtle color highlight, and an icon; responsive 3‑column layout on desktop, 2 on tablet and 1 on mobile. Tiles scale slightly on hover with a 300ms transition.2. **Projects section**: multi‑card grid showcasing backend systems, AI platforms, automated evaluation tools, stock predictors, and research. Cards include bullet lists of responsibilities, technology tags, and fade‑up animations with staggered delays.
3. **Skills section** grouped into Programming, AI Systems, Backend & Data Infra, and Frameworks with gradient heading text.
4. **About section** provides a multi‑paragraph overview: computer science student background, key skills (algorithms, Python/Java/C++), backend systems focus, research experience, co‑op readiness, and even a personal note on violin. Important terms like programming languages and strengths are emphasized.
5. **Resume section** embedding a PDF viewer along with a download button.
6. **Contact section** with email and social links; gradient heading included.
7. **Smooth scrolling**, **sticky navbar** and section highlighting – the current section is underlined/colored as you scroll.
8. **Mobile hamburger menu** with responsive toggle.
9. **Dark mode toggle** persists user preference.
9. **Minimalist tech portfolio style** featuring big type, clean spacing, soft shadows, gradient accents and subtle animations.
10. **Animated scroll effects** via AOS – hero fades in, project cards slide up, skill cards appear sequentially.
11. **Multiple resume versions** selectable on the resume page.
12. **Interactive skills**: hover over skill tiles to see them roll.
13. **Awards section**: new section listing academic honours and recognitions.


## Making it recruiter‑ready

- Add screenshots / demo links to the project cards in `js/github.js` (or augment with custom data).
- Consider including GitHub stats widgets (e.g. [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)).
- Enable dark mode toggler in `js/main.js` if desired.
- Host live demos or GitHub repo links for key projects; project cards already include descriptions and tags.

## Deployment

### GitHub Pages (free, simple)

1. Create a GitHub repository (e.g. `jackie-portfolio`).
2. Push the contents of this folder to the `main` branch.
3. Go to **Settings → Pages** and select **Deploy from branch** → `main` / `/ (root)`.
4. After a minute the site will be available at `https://<username>.github.io/jackie-portfolio`.

### Vercel (more powerful, automatic builds)

1. Sign in to [vercel.com](https://vercel.com) with GitHub.
2. Import the portfolio repo.
3. Configure build settings if you add a framework later (currently no build step).
4. Click **Deploy**; the site will live at `https://<project-name>.vercel.app`.
5. Future pushes to `main` automatically redeploy.

## Next steps / upgrades

- Migrate to a framework like Next.js/React/Stucco for reusable components.
- Awards section now lists academic contest results with scores (COMC, Euclid); update as new recognitions arrive.
- Add a projects JSON file or more sophisticated CMS if you want dynamic updates beyond static cards.
- Implement animations (AOS, Framer Motion) and dark-mode toggle for polish.
- Write a small script to deploy the resume PDF to `assets/` automatically.

---

This setup replicates the typical stack used by top CS students applying to internships: clean directory layout, Tailwind styling, GitHub integration, and free continuous deployment. Adjust assets and content as you grow the portfolio.