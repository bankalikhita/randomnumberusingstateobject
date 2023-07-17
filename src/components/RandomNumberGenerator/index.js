// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generate = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="div">
        <div className="seconddiv">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a Random Number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.generate}>
            Generate
          </button>
          <p className="head">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
