import balanceReducer from './balance'
import balanceReducer2 from './balance'
import * as constants from '../actions/constants'

describe('Balance reducer', () => {
  describe('when initializing', () => {
    const balance = 10

    test('sets a balance', () => {
      const state = balanceReducer(undefined, {
        type: constants.SET_BALANCE,
        balance,
      })
  
      expect(state).toEqual(balance)
    })
  
    describe('then re-initializing', () => {
      test('reads the balance from cookies', () => {
        const state = balanceReducer2(undefined, {})
  
        expect(state).toEqual(balance)
      })
    })
  })


  test('deposits into the balance', () => {
    const deposit = 10
    const initialState = 5
    const state = balanceReducer(initialState, {
      type: constants.DEPOSIT,
      deposit,
    })

    expect(state).toEqual(initialState + deposit)
  })

  test('withdraw from the balance', () => {
    const withdrawal = 10
    const initialState = 20
    const state = balanceReducer(initialState, {
      type: constants.WITHDRAW,
      withdrawal,
    })

    expect(state).toEqual(initialState - withdrawal)
  })
})
