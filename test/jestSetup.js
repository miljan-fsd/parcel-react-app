import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'raf/polyfill'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// Make Enzyme functions available in all test files without importing
/*eslint no-undef: "error"*/
/* global global:shallow global:render global:mount */
global.shallow = shallow
global.render = render
global.mount = mount
