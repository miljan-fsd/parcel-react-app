import React, { Component } from 'react'

import './App.css'
import react from '../images/reactjs.png'
import parcel from '../images/parceljs.png'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'React App with Parcel Bundler'
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">{this.state.title}</h1>

        <img src={react} className="App-img" alt="React.js" />

        <br />

        <img src={parcel} className="App-img" alt="Parcel.js" />
      </div>
    )
  }
}

export default App
