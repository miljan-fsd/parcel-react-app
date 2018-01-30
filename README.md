# Parcel React App

Create [React](https://github.com/facebook/react) apps using [Parcel](https://github.com/parcel-bundler/parcel) as build tool.

## Table of Contents

* [Getting Started](https://github.com/miljan-fsd/parcel-react-app#getting-started)
  * [Development](https://github.com/miljan-fsd/parcel-react-app#development)
  * [Production](https://github.com/miljan-fsd/parcel-react-app#production)
* [SCSS](https://github.com/miljan-fsd/parcel-react-app#scss)
* [CSS Modules](https://github.com/miljan-fsd/parcel-react-app#css-modules)
* [Formatting and Linting](https://github.com/miljan-fsd/parcel-react-app#formatting-and-linting)
  * [Formatting and Linting JS](https://github.com/miljan-fsd/parcel-react-app#formatting-and-linting-js)
  * [Formatting and Linting Styles](https://github.com/miljan-fsd/parcel-react-app#formatting-and-linting-styles)
* [Testing](https://github.com/miljan-fsd/parcel-react-app#testing)
* [Licence](https://github.com/miljan-fsd/parcel-react-app#licence)

Folder structure:

```
parcel-react-app/
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
|-- test/
|   |-- jestsetup.js
|-- .babelrc
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- .stylelintrc
|-- LICENCE
|-- package.json
|-- README.md
|-- yarn.lock
```

## Getting started

Clone the repo to your local machine and install dependencies:

```bash
git clone https://github.com/miljan-fsd/parcel-react-app.git

cd parcel-react-app

yarn
```

### Development

Start the development server run:

```bash
yarn start
```

Now, open [http://localhost:3000](http://localhost:3000) in your browser.

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

```bash
"lint:styled": "stylelint './src/**/*.js'"
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


## Licence

[MIT](https://tldrlegal.com/license/mit-license) &copy; Miljan Djordjevic
