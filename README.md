# Deploy a Next.js static site on GitHub Pages

This is a template repo for deploying a Next.js app on GitHub Pages. Only the `main` branch is needed for deployment (there is no separate `gh-pages` branch).

Some opinionated additions are included in the Next.js app:

- Prettier is used for code formatting.
- Vitest is used for testing with React Testing Library and JSDOM.

## Steps taken

If you're looking to manually reproduce something similar, here are the steps I took to create this repo:

### 1. Next.js generated app

- `npx create-next-app@latest app`
- Add `.nvmrc` at 24
- `npm i prettier -D`
- Add prettier config

### 2. GitHub Actions workfile to run tests (`.github/workflows/test-nextjs-app.yaml`)

- `npm i vitest -D`
- `npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths`
- Add vitest config
- Add passing test in a Header component

### 3. GitHub Action to build and deploy app (`.github/workflows/build-and-deploy-nextjs-app.yaml`)

- Adjust NextConfig to set `output: "export"`
- Files in `/_next/` 404 -> Use `BASE_PATH` in Next.js config and GHA workflow
- SVGs 404 -> Add custom Image wrapper component to use `BASE_PATH`

## Thanks

[This Stack Overflow answer](https://stackoverflow.com/a/79844013/8135076) saved the day.
