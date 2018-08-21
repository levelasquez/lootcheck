import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App component', () => {
  const app = shallow(<App />)

  test('renders properly', () => expect(app).toMatchSnapshot())
})
