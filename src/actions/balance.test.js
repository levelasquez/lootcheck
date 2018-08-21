import * as constants from './constants'
import * as actions from './balance'

test('creates an action to set the balance', () => {
  const balance = 0
  const expectedAction = {
    type: constants.SET_BALANCE,
    balance,
  }
  const action = actions.setBalance(balance)

  expect(action).toEqual(expectedAction)
})

test('creates an action to deposit into the balance', () => {
  const deposit = 10
  const expectedAction = {
    type: constants.DEPOSIT,
    deposit,
  }
  const action = actions.deposit(deposit)

  expect(action).toEqual(expectedAction)
})

test('creates an action to withdraw from the balance', () => {
  const withdrawal = 10
  const expectedAction = {
    type: constants.WITHDRAW,
    withdrawal,
  }
  const action = actions.withdraw(withdrawal)

  expect(action).toEqual(expectedAction)
})
