import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './App.css'
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
      <div className={classes.app}>
        <h1 className={classes.title}>{this.props.title}</h1>

        <p className={classes.text}>
          Let's make something {awesome} together. Edit{' '}
          <code>src/components/App.js</code> and save to see changes.
        </p>

        <img src={react} className={`${classes.img} ${classes.logo}`} alt="React.js" />

        <img src={parcel} className={classes.img} alt="Parcel.js" />
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string
}

export default App
