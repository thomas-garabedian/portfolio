# Codex guide for this portfolio

This is a static portfolio website. It has no backend, no build step, and no framework.

## How to run locally

```bash
python3 -m http.server 8080
```

Open:

```txt
http://localhost:8080
```

You can also run:

```bash
npm run start
```

No dependency installation is required.

## Project structure

```txt
index.html                  Home page, visual project landing page
profile.html                Profile hub
profile-experiences.html    Professional and technical experiences
profile-education.html      Education
profile-engagements.html    Commitments
profile-certifications.html Certifications and distinctions
projects.html               Project overview
contact.html                Contact page
resume.html                 Legacy profile/resume page kept for compatibility
projects/                   Detailed project pages
experiences/                Detailed experience pages
assets/css/style.css        Main stylesheet, including day/night theme
assets/js/main.js           Navigation, language switcher, image zoom, day/night toggle
docs/                       CV and resume PDFs
assets/img/                 Logos, photos, project visuals
```

## Editing rules

- Keep the site static: HTML, CSS, JS only.
- Use relative paths. Do not add external CDNs unless explicitly requested.
- Preserve bilingual content: French and English blocks use `lang-fr` and `lang-en` classes.
- Preserve the day/night theme toggle. Theme behavior is in `assets/js/main.js` and CSS variables in `assets/css/style.css`.
- Keep all PDF links in `docs/` working.
- Keep image zoom behavior by using `data-zoomable="true"` on project visuals.
- When adding a page, update the navigation consistently across pages.
- Avoid overloading the profile page. It should remain a clean hub with subpages.
- For recruiter-facing text, prefer concise, concrete wording over buzzwords.

## Typical Codex prompts

- "Refactor the profile page to make it more sober without changing content."
- "Add a new project card to index.html and projects.html, then create the detailed page in projects/."
- "Make the mobile layout cleaner while preserving the desktop layout."
- "Check all internal links and fix broken paths."
- "Improve accessibility alt text for project images."
