import React from 'react'
import { shallow } from 'enzyme'
import { Wallet } from './Wallet'

describe('Wallet component', () => {
  const props = { balance: 20 }
  const wallet = shallow(<Wallet {...props} />)

  test('renders properly', () => expect(wallet).toMatchSnapshot())

  test('displays the balance from props', () => {
    const balance = wallet.find('.balance').text()

    expect(balance).toEqual('Wallet balance: 20')
  })
})
