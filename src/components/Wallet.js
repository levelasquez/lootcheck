import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Wallet extends Component {
  render() {
    const { balance } = this.props

    return (
      <div>
        <h3 className='balance'>
          Wallet balance: {balance}
        </h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({ balance: state })

const connetedWallet = connect(mapStateToProps)(Wallet)

export default connetedWallet
