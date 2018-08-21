import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component {
  state = { balance: 0 }

  updateBalance = ({ target: { value } }) => this.setState({ balance: parseInt(value, 10) })

  deposit = () => {
    const { balance } = this.state
    const { deposit } = this.props

    deposit(balance)
  }

  withdraw = () => {
    const { balance } = this.state
    const { withdraw } = this.props

    withdraw(balance)
  }

  render() {
    const { balance } = this.props

    return (
      <div>
        <h3 className='balance'>
          Wallet balance: {balance}
        </h3>
        <br />
        <input
          className='input-wallet'
          onChange={this.updateBalance}
        />
        <button
          className='btn-deposit'
          onClick={this.deposit}
        >
          Deposit
        </button>
        <button
          className='btn-withdraw'
          onClick={this.withdraw}
        >
          Withdraw
        </button>
      </div>
    )
  }
}

const connetedWallet = connect(
  state => ({ balance: state }),
  { deposit, withdraw },
)(Wallet)

export default connetedWallet
