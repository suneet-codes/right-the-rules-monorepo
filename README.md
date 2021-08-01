# Mono-Repo for NextJS Front-End and Sanity.io Back-End

## Project Root
- Git Hooks provided with Husky for pre-commit and pre-push package scripts.
- Mono-repo tooling provided with lerna and yarn workspaces.

## Front-End
- CSS in JS with emotion (custom babel config provided to add support)
- Linting and Formatting with ESlint and Prettier using AirBnB (removed next lint in favour of this custom setup).
- Unit tests with @testing-library. Custom jest.config.js to enable transforming of jsx to js with babel-jest
- Prop-Types for type checking

## How To Use
Use the 'template' feature in GitHub to create a copy of this template. When it's cloned down to your machine, ensure you change the package names in each of the package.json files to the naming convention of your project.

Issue `yarn` in the root folder, and then `yarn lerna bootstrap` to ensure all dependencies are installed and local packages are linked together.

## Authors

- [@sun33t](https://www.github.com/sun33t)

  
## Feedback

If you have any feedback, please reach out to me at hello@suneet.codes