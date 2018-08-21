import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Wallet extends Component {
  state = { balance: 0 }

  updateBalance = ({ target: { value } }) => this.setState({ balance: parseInt(value, 10) })

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
      </div>
    )
  }
}

const mapStateToProps = state => ({ balance: state })

const connetedWallet = connect(mapStateToProps)(Wallet)

export default connetedWallet
