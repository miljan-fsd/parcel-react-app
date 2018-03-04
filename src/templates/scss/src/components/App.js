import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './App.scss'
import react from '../images/reactjs.png'
import parcel from '../images/parceljs.png'

class App extends Component {
  static defaultProps = {
    title: 'React App with Parcel Bundler'
  }

  state = {
    isAwesome: true
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

        <img src={parcel} className="img" alt="Parcel.js" />
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string
}

export default App
