import React from 'react'

import App from './App.js'

describe('<App />', () => {
  it('has 2 classes .img', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('.img')).toHaveLength(2)
  })

  it('has prop title', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.instance().props.title).toEqual(
      'React App with Parcel Bundler'
    )
  })
})
