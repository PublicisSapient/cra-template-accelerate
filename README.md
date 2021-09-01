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

To use this template, add `--template accelerate` when creating a new app.

For example:

```sh
npx create-react-app my-app --template accelerate

# or

yarn create react-app my-app --template accelerate
```

Once the new app is created, you must reinstall the dependencies to make sure
that husky's git hooks are installed properly. Unfortunately the hooks do not
get installed during the execution of the above commands.

To reinstall dependencies using npm, run the following commands:

```sh
cd my-app
rm package-lock.json node_modules
npm install
```

To reinstall dependencies using yarn, run the following commands:

```sh
cd my-app
rm yarn.lock node_modules
yarn
```

## Learn More

- [Detailed documentation](template/README.md)
- [Create React App - Getting Started](https://create-react-app.dev/docs/getting-started)
- [Create React App - User Guide](https://create-react-app.dev)
