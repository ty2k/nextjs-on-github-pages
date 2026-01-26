# Deploy a Next.js static site on GitHub Pages

This is a template repo for deploying a Next.js app on GitHub Pages. Only the `main` branch is needed for deployment (there is no separate `gh-pages` branch).

Some opinionated additions are included in the Next.js template app:

- Vitest is used for testing with React Testing Library and JSDOM. A GitHub Action is included to run tests when a PR is made against `main`.
- Prettier is used for code formatting. There's no automation enforcing it, but a `format` script is added in `package.json`.

## Sharp edges you might encounter using this repo as a template

### Custom domain

Planning to use a custom domain instead of the default `https://<user>.github.io/<repo_name>` URL? In this case, remove the `BASE_PATH` logic from this deployment:

- [ ] Comment out the `Set BASE_PATH from repository name` step in `.github/workflows/build-and-deploy-nextjs-app.yaml`.
- [ ] Comment out the `basePath` section of `app/next.config.ts`.
- [ ] (optional) Avoid using or remove the custom `Image` wrapper component at `app/src/components/Image/Image.tsx`.

The reason for taking these steps is that if you are using a custom domain, it's fine to have Next.js generate all your links relative to the domain root, like `example.com/_next/chunk.js`. The `BASE_PATH` logic is for the default case where the site gets deployed at `https://<user>.github.io/<repo_name>`. Here, Next.js will bake `href`s like `/_next/chunk.js` into your HTML files. When you browser attempts to fetch those files, it gets 404s because it's aiming at `https://<user>.github.io/_next/chunk.js` instead of `https://<user>.github.io/<repo_name>/_next/chunk.js`.

## Steps taken to create this repo

If you're looking to manually reproduce something similar to what's in this repo, here are the steps I took:

### 1. Generate Next.js app

- `npx create-next-app@latest app`
- Add `.nvmrc` at 24
- `npm i prettier -D`
- Add prettier config

### 2. Add GitHub Actions workflow to run tests (`.github/workflows/test-nextjs-app.yaml`)

- `npm i vitest -D`
- `npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths`
- Add vitest config
- Add passing test in a Header component

### 3. Add GitHub Actions workflow to build and deploy app (`.github/workflows/build-and-deploy-nextjs-app.yaml`)

- Adjust NextConfig to set `output: "export"`
- Files in `/_next/` 404 -> Use `BASE_PATH` in Next.js config and GHA workflow
- SVGs 404 -> Add custom Image wrapper component to use `BASE_PATH`

## Thanks

[This Stack Overflow answer](https://stackoverflow.com/a/79844013/8135076) saved the day while trying to brute-force this process.

Shout out to GitHub for keeping Pages free despite the horrible deployment dance required to get it working for modern static sites.
