// Write your code here
import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {randomNumber: 0, total: 0, heads: 0, tails: 0}

  onTossingCoin = () => {
    const number = Math.floor(Math.random() * 2)
    if (number === 0) {
      this.setState({randomNumber: number})
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState({randomNumber: number})
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {randomNumber, total, heads, tails} = this.state
    let imageUrl
    if (randomNumber === 0) {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin-image" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onTossingCoin}
          >
            Toss Coin
          </button>
          <div className="scores-container">
            <p className="score">Total: {total}</p>
            <p className="score">Heads: {heads}</p>
            <p className="score">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
