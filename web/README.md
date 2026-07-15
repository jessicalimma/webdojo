
# Webdojo - End-to-End Test Automation

This repository contains the **Webdojo Application** and its **End-to-End (E2E) automated test suite** developed using **Cypress**.

The application and the test automation are part of the **same repository**. Before executing any automated tests, the application must be started locally.

---

# Technologies

- Cypress
- JavaScript
- Node.js
- npm

# Prerequisites

- Node.js (v18 or higher recommended)
- npm

```bash
node -v
npm -v
```

# Installation

```bash
npm install
```

# Running the Webdojo Application

Start the application:

```bash
npm run dev
```

Application URL:

```
http://localhost:3000
```

# Running the Automated Tests

## Run all tests

```bash
npm test
```

Viewport: **1440 × 900**

## Open Cypress

```bash
npm run test:ui
```

## Login tests (Desktop)

```bash
npm run test:login
```

Viewport: **1440 × 900**

## Login tests (Mobile)

```bash
npm run test:login:mobile
```

Viewport: **414 × 896**

# Available Scripts

| Script | Description |
|----------|-------------|
| `npm run dev` | Starts the Webdojo application locally on port **3000**. |
| `npm test` | Runs all Cypress tests in headless mode. |
| `npm run test:ui` | Opens Cypress Test Runner. |
| `npm run test:login` | Runs the Login tests using a desktop viewport. |
| `npm run test:login:mobile` | Runs the Login tests using a mobile viewport. |

# Project Structure

```text
cypress
│
├── e2e
│   └── Test specifications
│
├── fixtures
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
│
└── support
    ├── actions
    │   └── consultancy.actions.js
    ├── commands.js
    ├── e2e.js
    └── utils.js

dist/
node_modules/
cypress.config.js
package.json
package-lock.json
```

# Project Organization

## cypress/e2e
Contains all End-to-End test specifications.

## cypress/fixtures
Stores static test data used during test execution:
- `cep.json`
- `consultancy.json`
- `document.pdf`

## cypress/support
Shared reusable code.

### actions/
Contains reusable business actions.

### commands.js
Custom Cypress commands.

### utils.js
Utility/helper functions.

### e2e.js
Global Cypress configuration executed before every test run.

# Best Practices

- Reusable custom commands
- Fixtures for test data
- Shared business actions
- Utility functions
- Maintainable and independent test cases

# Notes

- Always start the application (`npm run dev`) before executing the tests.
- Desktop viewport: **1440 × 900**
- Mobile viewport: **414 × 896**

# Author

Automated test suite developed for the **Webdojo Application** using **Cypress**.
