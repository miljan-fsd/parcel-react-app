import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import react from '../images/reactjs.png'
import parcel from '../images/parceljs.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 80px 0;
  font-style: italic;
  font-size: 2.5rem;
  text-transform: uppercase;
  background-color: var(--primary-color);
  color: var(--secondary-color);
`

const Text = styled.p`
  font-size: 1.2rem;
`

const Awesome = styled.span`
  color: var(--primary-color);
  text-transform: uppercase;
  font-weight: bold;
`

const Img = styled.img`
  max-width: 350px;
  margin: 10px 0;
`

const turnUp = keyframes`
  20%,
  100% {
    left: 0;
    bottom: 0;
    opacity: 1;
  }
  0%,
  10% {
    left: 0;
    bottom: -150px;
    opacity: 0;
  }
`

const Logo = Img.extend`
  width: 100px;
  position: relative;
  animation: ${turnUp} 5s infinite;
`

class App extends Component {
  static defaultProps = {
    title: 'React App with Parcel Bundler'
  }

  state = {
    isAwesome: true
  }

  render() {
    const awesome = this.state.isAwesome ? <Awesome>awesome</Awesome> : ''

    return (
      <Wrapper>
        <Title>{this.props.title}</Title>

        <Text>
          Let's make something {awesome} together. Edit{' '}
          <code>src/components/App.js</code> and save to see changes.
        </Text>

        <Logo src={react} alt="React.js" />

        <Img src={parcel} alt="Parcel.js" />
      </Wrapper>
    )
  }
}

App.propTypes = {
  title: PropTypes.string
}

export default App
