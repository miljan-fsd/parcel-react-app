import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './App.css'
import react from '../images/reactjs.png'
import parcel from '../images/parceljs.png'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAwesome: true
    }
  }

  render() {
    const awesome = this.state.isAwesome ? <span>awesome</span> : ''

    return (
      <div className="app">
        <h1 className="title">{this.props.title}</h1>

        <p className="text">
          Let's make something {awesome} together. Edit{' '}
          <code>src/components/App.js</code> and save to see changes.
        </p>

        <img src={react} className="img logo" alt="React.js" />

        <br />

        <img src={parcel} className="img" alt="Parcel.js" />
      </div>
    )
  }
}

App.defaultProps = {
  title: 'React App with Parcel Bundler'
}

App.propTypes = {
  title: PropTypes.string
}

export default App
