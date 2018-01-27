# Parcel React App

Starter kit for creating [React](https://reactjs.org/) apps using [Parcel Bundler](https://parceljs.org/).

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
|-- .gitignore
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

or

```bash
npm install
```

### Development

Start the development server run:

```bash
yarn start
```

Now open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

Build for production run:

```bash
yarn build
```

This will bundle your application in the `build` folder.

## SCSS

If you want use `.scss` instead of `.css`, you need to install `node-sass` module:

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
