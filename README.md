# Workflow CA

This CA is based on the Noroff assignment repo.
I have configured dev tools, pre-commit hooks, unit tests and end-to-end tests.

## Setup

Requirements:

- Node.js 24 and npm
- A registered Noroff API user for the login test
  Internet access for the end-to-end tests

Clone this repo, open the project folder and switch to the assignment branch:

```bash
git switch workflow
```

Install the dependencies:

```bash
npm install
```

Install Chromium for Playwright:

```bash
npx playwright install chromium
```

## Environment variables

Copy `.env.example` to a new file called `.env` in the project root.

Fill in the following variables using a registered Noroff API user:

- `TEST_EMAIL`: The user's email address.
- `TEST_PASSWORD`: The user's password.

The `.env` file is ignored by Git.
The `.env.example` file shows the required variables without credentials.

## Run the website

```bash
npm run serve
```

Open http://127.0.0.1:3000 in your browser.

To rebuild Tailwind CSS while editing styles, run this in another terminal:

```bash
npm run dev
```

## Scripts

| Command                   | Description                                         |
| ------------------------- | --------------------------------------------------- |
| `npm run serve`           | Start the local webserver.                          |
| `npm run dev`             | Build Tailwind CSS and watch for changes.           |
| `npm run lint`            | Check JavaScript with ESLint.                       |
| `npm run lint:fix`        | Automatically fix supported lint issues.            |
| `npm run format`          | Format files with Prettier.                         |
| `npm run format:check`    | Check formatting without changing files.            |
| `npm test`                | Run unit tests once.                                |
| `npm run test:watch`      | Run unit tests in watch mode.                       |
| `npm run test:e2e`        | Run Playwright tests.                               |
| `npm run test:e2e:headed` | Run Playwright tests with a visible browser.        |
| `npm run prepare`         | Set up Husky hooks. Also runs during `npm install`. |

## Unit tests

The tests are in `tests/unit` and use Vitest with jsdom.

The tests for `isActivePath` check:

- An exact path match.
- `/` and `/index.html` for the root link.
- A current path that includes the href.
- Paths that do not match.

The tests for `getUsername` check:

- The name is returned after saving a user.
- Null is returned when no user is stored.

Local storage is cleared before each storage test.

## End-to-end tests

The tests are in `tests/e2e` and use Playwright with Chromium.

They check:

- Successful login with credentials from environment variables.
- An error message when using an incorrect password.
- Navigation from the home page to the first venue, with
  "Venue details" in the heading.

Playwright starts the local webserver automatically when needed.

## Pre-commit hooks

Husky runs lint-staged before each commit.

Staged JavaScript files are checked with ESLint and formatted
with Prettier. Staged HTML files are formatted with Prettier.

Remaining lint errors stop the commit.
Unit tests and end-to-end tests are run separately.

## Dependency audit

I ran `npm audit fix` to apply compatible updates.
Some vulnerabilities remained in dependencies used by Tailwind 3.

I did not use `npm audit fix --force`, because it proposed a
breaking upgrade to Tailwind 4.
