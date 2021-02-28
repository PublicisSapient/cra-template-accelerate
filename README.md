# cra-template-accelerate

This template is based on
[Create React App](https://github.com/facebook/create-react-app). It is designed
to accelerate React application development by providing guidance, libraries and
tools to encourage you to write web applications using best practices.

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
   - [Prettier](https://prettier.io/) to format code consistently

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
