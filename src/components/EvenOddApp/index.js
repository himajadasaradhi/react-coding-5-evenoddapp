// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increaseCount = () => {
    const {count} = this.state
    this.setState(prevState => ({count: Math.floor(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="content-container">
        <div className="background-container">
          <h1 className="heading">Count {count}</h1>
          <p className="first-para">
            Count is {count % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <button type="button" className="button" onClick={this.increaseCount}>
            Increment
          </button>
          <p className="last-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
