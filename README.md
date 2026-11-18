# tasnimrh.github.io

Portfolio site for Tasnim Hassan. Built with Astro, deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Updating it

- Profile, experience, education, leadership and certifications: `src/data/site.ts`
- Case studies: `src/data/projects.ts`
- Photo: add a square `public/tasnim.jpg` and set `photo: '/tasnim.jpg'` in `src/data/site.ts`
- Resume: replace `public/Tasnim_Hassan_Resume.pdf` (keep the phone number off the public copy)

The review-budget chart reads `src/data/olist-curve.json`, recomputed from the locked final model in notebook 05 of the Olist project.

## Run locally

```
npm install
npm run dev
```
