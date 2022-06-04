# React Accelerate

A batteries-included template for creating production quality React apps. Based
on [Create React App](https://github.com/facebook/create-react-app), this
template is designed to accelerate React application development by providing
guidance, libraries and tools to write web applications using best practices.

## Features

1. TypeScript based - for type safety
2. Opinionated folder structure
3. Foundational libraries
   - [React Router](https://reactrouter.com/)
4. Essential tools
   - [Storybook](https://storybook.js.org/) to develop UI components in
     isolation
   - [React Testing Library](https://testing-library.com/) for unit testing
   - [Cypress](https://www.cypress.io/) for end-to-end testing
   - [Husky](https://typicode.github.io/husky) to improve the quality of commits
   - [Mock Service Worker](https://mswjs.io/) to mock HTTP requests
   - [Prettier](https://prettier.io/) to format code consistently
5. Some useful starter components:
   - **ErrorBoundary**: A component to catch JavaScript errors anywhere in its
     child component tree and display a fallback UI.
   - **Loading**: A placeholder loading component
   - **EnvProvider**: Provides a mechanism for loading environment variables
     dynamically by placing an environment file (`env.js`) in the `/public`
     folder. This allows a single build to be used across multiple environments
     such as develop, qa, uat & prod.
   - **Home**: A simple page showing end-to-end flow from client to server. It
     makes an HTTP request to the server, which is intercepted by Mock Service
     Worker (in development mode) and displays a list of movies. The unit test
     for this page does not have to do any jest level mocking, demonstrating the
     power of MSW.
   - **NotFound**: A placeholder NotFound page
   - **Sample Storybook Stories**: Showing best practices in Storybook
   - **Unit Testing**: Utility functions to make testing easier. Also, some
     sample tests to show best practices.
   - **End-to-End Testing**: Sample Cypress tests to show best practices.

## Getting Started

Run the following commands to create your React app in a local Git repository.

```sh
# Notes:
# - Replace `~/projects` with whatever location you use for saving your projects
# - Replace 'my-app' with the real name of your app, e.g. 'movie-magic'
# - Use npx or yarn based on your preference

cd ~/projects

npx create-react-app my-app --template accelerate

# or

yarn create react-app my-app --template accelerate
```

Once the new app is created, you must reinstall the dependencies. There are two
reasons for this:

1. Make sure that husky's git hooks are installed properly. Unfortunately the
   hooks do not get installed during the execution of the above commands.

2. Installing Storybook is a bit finicky. The steps below install it manually.

Follow the steps below:

### Step 1: Add Storybook dependencies

Add the following Storybook dependencies in `my-app/package.json` at the
beginning of the `devDependencies` section:

```
    "@mdx-js/react": "^1.6.22",
    "@storybook/addon-a11y": "^6.5.6",
    "@storybook/addon-actions": "^6.5.6",
    "@storybook/addon-essentials": "^6.5.6",
    "@storybook/addon-interactions": "^6.5.6",
    "@storybook/addon-links": "^6.5.6",
    "@storybook/builder-webpack5": "^6.5.6",
    "@storybook/manager-webpack5": "^6.5.6",
    "@storybook/node-logger": "^6.5.6",
    "@storybook/react": "^6.5.6",
    "@storybook/testing-library": "^0.0.11",
```

### Step 2: Update the scripts section

Replace the `scripts` section in the same file (`my-app/package.json`) with the
block below. We are just making minor adjustments for readability and a better
workflow:

```
  "scripts": {
    "build": "react-scripts build",
    "build-storybook": "build-storybook -s public",
    "cypress": "cypress open",
    "eject": "react-scripts eject",
    "format": "prettier --write README.md \"src/**/{*.md,*.json,*.css,*.ts*}\" \"cypress/integration/**/*\"",
    "lint": "eslint src",
    "prepare": "husky install",
    "start": "react-scripts start",
    "storybook": "start-storybook -p 6006 -s public",
    "test": "npm run lint && npm run test:coverage",
    "test:coverage": "react-scripts test --coverage --watchAll=false",
    "test:update": "react-scripts test --watchAll=false --updateSnapshot",
    "test:watch": "react-scripts test"
  },
```

### Step 3: Yarn users only

Find the `overrides` section in the same file (`my-app/package.json`). Note that
there will be two matches for `overrides`, but you are looking for the section
below:

```
  "overrides": {
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-refresh": "0.13.0"
  },
```

Replace the word `overrides` with `resolutions`. This is the yarn equivalent for
npm `overrides`. The new section should look like this:

```
  "resolutions": {
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-refresh": "0.13.0"
  },
```

### Step 4: Reinstall Dependencies

To reinstall dependencies using npm, run the following commands:

```sh
cd my-app
rm -rf package-lock.json node_modules
npm install
```

To reinstall dependencies using yarn, run the following commands:

```sh
cd my-app
rm -rf yarn.lock node_modules
yarn
```

### Step 5: Test your installation

```sh
npm start # sample app shows up in your browser at http://localhost:3000/
npm run storybook # storybook starts up at http://localhost:6006/
npm run test # test suites runs successfully
```

### Step 6: Commit your changes

```sh
git add .
git commit -m "Added storybook"
```

## Testing the template locally (for template developers)

To test this template locally, use the following commands:

```sh
cd ..
npx create-react-app test-app --template file:./cra-template-accelerate
```

## Learn More

- [Create React App - Getting Started](https://create-react-app.dev/docs/getting-started)
- [React Learning Resources](https://github.com/nareshbhatia/react-learning-resources)
