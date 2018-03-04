import React from 'react'

import App from './App.js'

describe('<App />', () => {
  it('has 4 elements', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.children()).toHaveLength(4)
  })

  it('has prop title', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.instance().props.title).toEqual(
      'React App with Parcel Bundler'
    )
  })
})
