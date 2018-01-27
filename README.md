# Parcel React App

Starter kit for creating [React](https://github.com/facebook/react) apps using [Parcel Bundler](https://github.com/parcel-bundler/parcel).

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

If you want to use `.scss` instead of `.css`, you need to install `node-sass` module:

```bash
yarn add node-sass
```

## CSS Modules

In order to use **CSS Modules** you need to install:

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
