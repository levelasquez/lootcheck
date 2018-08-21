import balanceReducer from './balance'
import * as constants from '../actions/constants'

describe('Balance reducer', () => {
  test('sets a balance', () => {
    const balance = 10
    const state = balanceReducer({}, {
      type: constants.SET_BALANCE,
      balance,
    })

    expect(state).toEqual(balance)
  })
})
