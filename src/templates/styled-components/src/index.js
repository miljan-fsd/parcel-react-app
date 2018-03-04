import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'

import App from './components/App.js'

injectGlobal`
  :root {
    --primary-color: #62dafb;
    --secondary-color: #fff;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  img {
    width: 100%;
  }
`

render(<App />, document.getElementById('app'))
