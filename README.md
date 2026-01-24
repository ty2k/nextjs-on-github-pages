# Deploy a Next.js static site on GitHub Pages

- [ ] Next.js generated app
  - `npx create-next-app@latest app`
  - Pin deps
  - Add `.nvmrc` at 24
  - `npm i prettier -D`
  - Add prettier config
- [ ] GitHub Action to test the app
  - `npm i vitest -D`
  - `npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths`
  - Add vitest config
  - Add passing test
  - Add GitHub Actions workflow file to run tests
- [ ] GitHub Action to build the app
