# Playwright TypeScript Functional Tests

This repository contains automated tests using [Playwright](https://playwright.dev/) with TypeScript, including test reporting with [Allure](https://docs.qameta.io/allure/).

## 📌 Prerequisites

Ensure you have the following installed before running the tests:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Allure Command-Line](https://docs.qameta.io/allure/#_installing_a_commandline)

## 🚀 Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/aljazarifoundation/PlaywrightTypeScriptFunctional.git
cd your-repo-name
npm install
```

## 🏃 Running Tests

### 1️⃣ Run Tests with Playwright

To execute the tests, use:

```sh
npx playwright test
```

### 2️⃣ Run Tests and Generate Allure Report

Execute tests with Allure reporting enabled:

```sh
npx playwright test --reporter=line,allure
```

### 3️⃣ View Allure Report

To generate and open the Allure report:

```sh
npx allure generate allure-results --clean
npx allure open
```

## 🛠️ Allure Report Configuration

To configure Allure reporting in Playwright:

1. Install Allure dependencies:

   ```sh
   npm install --save-dev allure-playwright
   ```

2. Add the Allure reporter in `playwright.config.ts`:

   ```ts
   import { defineConfig } from '@playwright/test';

   export default defineConfig({
     reporter: [['line'], ['allure-playwright']],
   });
   ```

3. Ensure Allure results are stored in `allure-results`:

   ```sh
   mkdir -p allure-results
   ```

## 📂File Structure
```
📂 PlaywrightTypeScriptFunctional
├── 📂 tests           # Test scripts
├── 📂 tests-examples  # Test scripts example from playwright
├── 📂 test-results    # Test results
├── .gitignore         # Ignore unnecessary files
├── package.json       # Project dependencies
├── package-lock.json  # Project dependencies
├── playwright.config.ts # Playwright configuration
├── generate-env.ts   # Environment variable setup (still issue)
├── environment.properties # manual config environment
└── README.md         # Documentation
```

## 🔥 Additional Commands

- Run a single test file:

  ```sh
  npx playwright test tests/example.spec.ts
  npx playwright test ./tests/saucedemo_login.spec.spec.ts --ui
  ```

- Debug a test:

  ```sh
  npx playwright test --debug
  ```


## 📝 Notes

- Ensure `allure-results` is ignored in `.gitignore` to prevent unnecessary commits.
- Adjust `playwright.config.ts` to enable or disable reporters as needed.

## 📹 video

https://github.com/user-attachments/assets/e1dcacd5-66fd-4c1e-8b50-2061328bf096

---
🚀 Happy Testing!

