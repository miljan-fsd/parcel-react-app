# Parcel React App

Starter kit for creating [React](https://github.com/facebook/react) apps using [Parcel Bundler](https://github.com/parcel-bundler/parcel).

## Table of Contents

* [Getting Started](https://github.com/miljan-fsd/parcel-react-app#getting-started)
  * [Development](https://github.com/miljan-fsd/parcel-react-app#development)
  * [Production](https://github.com/miljan-fsd/parcel-react-app#production)
* [SCSS](https://github.com/miljan-fsd/parcel-react-app#scss)
* [CSS Modules](https://github.com/miljan-fsd/parcel-react-app#css-modules)
* [Formatting and Linting](https://github.com/miljan-fsd/parcel-react-app#formatting-and-linting)
  * [Formatting JS](https://github.com/miljan-fsd/parcel-react-app#formatting-js)
  * [Formatting Styles](https://github.com/miljan-fsd/parcel-react-app#formatting-styles)

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

## Formatting and Linting

The app uses [eslint](https://github.com/eslint/eslint) and [stylelint](https://github.com/stylelint/stylelint) for linting and [prettier](https://github.com/prettier/prettier) for formatting files.

To fix formatting issues:

```bash
yarn format
```
### Formatting JS

If you want to fix only javascript issues:

```bash
yarn format:js
```

### Formatting Styles

If you want to fix only style issues:

```bash
yarn format:style
```
## Licence

[MIT](https://tldrlegal.com/license/mit-license)
