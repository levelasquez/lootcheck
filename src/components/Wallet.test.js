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

  test('creates an input to deposit into or withdraw from the balance', () => {
    const exists = wallet.find('.input-wallet').exists()

    expect(exists).toBe(true)
  })

  describe('when the user types into the wallet input', () => {
    const userBalance = '25'

    beforeEach(() => wallet.find('.input-wallet').simulate('change', {
      target: { value: userBalance },
    }))

    test('updates the local wallet balance in `state` and converts it to a number', () => {
      const { balance } = wallet.state()

      expect(balance).toEqual(parseInt(userBalance, 10))
    })
  })
})
