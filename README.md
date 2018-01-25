# Parcel React App

Starter kit for creating React apps using Parcel Bundler.

Folder structure:

```
parcel-react-app/
  public/
    favicon.ico
    index.html
  src/
    components/
      App.css
      App.js
    images/
      parceljs.png
      reactjs.png
    index.css
    index.js
  .babelrc
  .gitignore
  LICENCE
  package.json
  README.md
  yarn.lock
```

## Getting started

Clone the repo to your local machine:

```bash
# Clone repo
git clone https://github.com/miljan-fsd/parcel-react-app.git

# Move to parcel-react-app
cd parcel-react-app

# Install dependencies
yarn

# Once complete run
yarn start

# Open http://localhost:3000
```

### Production

```bash
# Build for production
yarn prod
```

This will bundle your application in the `dist` folder.

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
