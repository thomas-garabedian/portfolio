# Thomas Garabédian Portfolio

Static personal portfolio website, ready for VS Code, Codex, and GitHub Pages.

## Open in VS Code

```bash
cd thomas-garabedian-portfolio-codex
code .
```

## Run locally

```bash
python3 -m http.server 8080
```

Then open:

```txt
http://localhost:8080
```

Alternative:

```bash
npm run start
```

## Publish on GitHub Pages

1. Push the whole folder to a GitHub repository.
2. In GitHub: `Settings → Pages`.
3. Source: `Deploy from a branch`.
4. Branch: `main`, folder: `/root`.
5. Save.

The site entry point is `index.html`.

## Notes for Codex

Read `CODEX.md` before asking Codex to edit the site. It contains the architecture, conventions, and editing rules.
