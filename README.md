# Parcel React App

[![dependencies](https://img.shields.io/david/miljan-fsd/parcel-react-app.svg)](https://david-dm.org/miljan-fsd/parcel-react-app) [![devDependencies](https://img.shields.io/david/dev/miljan-fsd/parcel-react-app.svg)](https://david-dm.org/miljan-fsd/parcel-react-app?type=dev) [![npmDownloads](https://img.shields.io/npm/dt/parcel-react-app.svg?style=flat)](https://www.npmjs.com/package/parcel-react-app)

Create [React](https://github.com/facebook/react) apps using [Parcel](https://github.com/parcel-bundler/parcel) as build tool.

## Table of Contents

* [Getting Started](https://github.com/miljan-fsd/parcel-react-app#getting-started)
  * [Install](https://github.com/miljan-fsd/parcel-react-app#install)
  * [Usage](https://github.com/miljan-fsd/parcel-react-app#usage)
  * [Development](https://github.com/miljan-fsd/parcel-react-app#development)
  * [Production](https://github.com/miljan-fsd/parcel-react-app#production)
* [SCSS](https://github.com/miljan-fsd/parcel-react-app#scss)
* [CSS Modules](https://github.com/miljan-fsd/parcel-react-app#css-modules)
* [Styled-Components](https://github.com/miljan-fsd/parcel-react-app#styled-components)
* [Formatting and Linting](https://github.com/miljan-fsd/parcel-react-app#formatting-and-linting)
  * [Formatting and Linting JS](https://github.com/miljan-fsd/parcel-react-app#formatting-and-linting-js)
  * [Formatting and Linting Styles](https://github.com/miljan-fsd/parcel-react-app#formatting-and-linting-styles)
* [Testing](https://github.com/miljan-fsd/parcel-react-app#testing)
* [License](https://github.com/miljan-fsd/parcel-react-app#license)

## Getting started

### Install

Install [parcel-react-app](https://www.npmjs.com/package/parcel-react-app) globally:

```bash
npm i -g parcel-react-app
```

### Usage

To create a new app, run:

```bash
parcel-react-app my-app
```
This will create a folder `my-app` and install all dependencies. Folder structure:

```
my-app/
|-- .github/
|   |-- CODE_OF_CONDUCT.md
|   |-- CONTRIBUTING.md
|   |-- ISSUE_TEMPLATE.md
|   |-- PULL_REQUEST_TEMPLATE.md
|-- config/
|   |-- jestSetup.js
|-- public/
|   |-- favicon.ico
|   |-- index.html
|-- src/
|   |-- components/
|   |   |-- App.css
|   |   |-- App.js
|   |   |-- App.test.js
|   |-- images/
|       |-- parceljs.png
|       |-- reactjs.png
|   |-- index.css
|   |-- index.js
|-- .babelrc
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- .stylelintrc
|-- LICENSE
|-- package.json
|-- README.md
|-- yarn.lock
```

### Development

Start the development server run:

```bash
yarn start
```

This will automatically open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

Build for production run:

```bash
yarn build
```

This will bundle your application in the `build` folder.

## SCSS

If you want to use `.scss` instead of `.css`, you need to install [node-sass](https://github.com/sass/node-sass) module:

```bash
yarn add node-sass
```

## CSS Modules

In order to use [CSS Modules](https://github.com/css-modules/css-modules) you need to install [postcss-modules](https://github.com/css-modules/postcss-modules) and [autoprefixer](https://github.com/postcss/autoprefixer):

```bash
yarn add postcss-modules autoprefixer
```

Then create `.postcssrc` file inside root folder and paste in:

```json
{
  "modules": true,
  "plugins": {
    "autoprefixer": {
      "grid": true
    }
  }
}
```

## Styled-Components

Install [styled-components](https://github.com/styled-components/styled-components):

```bash
yarn add styled-components
```

If you want to lint your **styled-components** with **stylelint** follow the instructions on [stylelint-processor-styled-components](https://github.com/styled-components/stylelint-processor-styled-components). Then add
this script to your `package.json`:

```json
"scripts": {
  "lint:styled": "stylelint './src/**/*.js'"
}
```

## Formatting and Linting

The app uses [eslint](https://github.com/eslint/eslint) and [stylelint](https://github.com/stylelint/stylelint) for linting and [prettier](https://github.com/prettier/prettier) for formatting files. Supports the following file extensions: `.js`, `.jsx`, `.json`, `.md`, `.css` and `.scss`.

To fix formatting issues:

```bash
yarn format
```

To lint your code:

```bash
yarn lint
```

### Formatting and Linting JS

If you want to fix JavaScript issues:

```bash
yarn format:js
```

To lint JavaScript code:

```bash
yarn lint:js
```

This will also fix or lint if you have `.json` and `.md` files inside `src/` folder.

### Formatting and Linting Styles

If you want to fix only style issues (`.css` or `.scss` files):

```bash
yarn format:style
```

To lint your style (`.css` or `.scss` files):

```bash
yarn lint:style
```

## Testing

The app uses [Jest](https://github.com/facebook/jest) a test runner and [Enzyme](https://github.com/airbnb/enzyme) a testing utilitis for React.

To run all unit tests:

```bash
yarn test
```

Run watch mode:

```bash
yarn test:watch
```

Get coverage report run:

```bash
yarn test:coverage
```


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/miljan-fsd/parcel-react-app/blob/master/LICENSE) file for details.
