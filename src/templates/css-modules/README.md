# Parcel React App

[![dependencies](https://img.shields.io/david/miljan-fsd/parcel-react-app.svg)](https://david-dm.org/miljan-fsd/parcel-react-app) [![devDependencies](https://img.shields.io/david/dev/miljan-fsd/parcel-react-app.svg)](https://david-dm.org/miljan-fsd/parcel-react-app?type=dev) [![npmDownloads](https://img.shields.io/npm/dt/parcel-react-app.svg?style=flat)](https://www.npmjs.com/package/parcel-react-app)

Create [React](https://github.com/facebook/react) apps using [Parcel](https://github.com/parcel-bundler/parcel) as build tool.

## Table of Contents

* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Development](#development)
  * [Production](#production)
* [Formatting and Linting](#formatting-and-linting)
  * [Formatting and Linting JS](#formatting-and-linting-js)
  * [Formatting and Linting Styles](#formatting-and-linting-styles)
* [Testing](#testing)
* [License](#license)

## Getting started

### Installation

Install [parcel-react-app](https://www.npmjs.com/package/parcel-react-app) globally:

```bash
npm i -g parcel-react-app
```

### Usage

To create a new app, run:

```bash
parcel-react-app new
```

First, you need to enter the name of the project (e.g. `my-app`), author of the project and then select the style type (`css`, [scss](https://github.com/sass/node-sass), [css-modules](https://github.com/css-modules/css-modules) or [styled-components](https://github.com/styled-components/styled-components)). This will create a folder `my-app` and install all dependencies. Folder structure (for css):

```markdown
my-app/
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
|   |-- index.js
|-- .babelrc
|-- .eslintrc.json
|-- .gitignore
|-- .postcssrc
|-- .prettierrc
|-- .stylelintrc
|-- package-lock.json
|-- package.json
|-- README.md
```

### Development

Start the development server run:

```bash
npm run dev
```

This will automatically open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

Build for production run:

```bash
npm run build
```

This will bundle your application in the `build` folder.

## Formatting and Linting

The app uses [eslint](https://github.com/eslint/eslint) and [stylelint](https://github.com/stylelint/stylelint) for linting and [prettier](https://github.com/prettier/prettier) for formatting files. Supports the following file extensions: `.js`, `.jsx`, `.json`, `.md`, `.css` and `.scss`.

To fix formatting issues:

```bash
npm run format
```

To lint your code:

```bash
npm run lint
```

### Formatting and Linting JS

If you want to fix JavaScript issues:

```bash
npm run format:js
```

To lint JavaScript code:

```bash
npm run lint:js
```

This will also fix or lint if you have `.json` and `.md` files inside the `src/` folder.

### Formatting and Linting Styles

If you want to fix only style issues:

```bash
npm run format:style
```

To lint your style:

```bash
npm run lint:style
```

## Testing

The app uses [Jest](https://github.com/facebook/jest) a test runner and [Enzyme](https://github.com/airbnb/enzyme) a testing utilitis for React.

To run all unit tests:

```bash
npm run test
```

Run watch mode:

```bash
npm run test:watch
```

Get coverage report run:

```bash
npm run test:coverage
```

## License

This project is licensed under the **MIT License** - see the [LICENSE](https://github.com/miljan-fsd/parcel-react-app/blob/master/LICENSE) file for details.
