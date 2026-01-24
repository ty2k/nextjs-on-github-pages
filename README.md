# Deploy a Next.js static site on GitHub Pages

- [x] Next.js generated app
  - `npx create-next-app@latest app`
  - Pin deps
  - Add `.nvmrc` at 24
  - `npm i prettier -D`
  - Add prettier config
- [x] GitHub Action to test the app
  - `npm i vitest -D`
  - `npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths`
  - Add vitest config
  - Add passing test
  - Add GitHub Actions workflow file to run tests
- [x] GitHub Action to build the app
  - Adjust NextConfig to set `output: "export"`
  - Files in `/_next/` 404 -> Use `BASE_PATH` in Next.js config and GHA workflow
  - SVGs 404 -> Add custom Image wrapper component to use `BASE_PATH`
