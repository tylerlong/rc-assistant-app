import SubX from 'subx'
import { Component } from 'react-subx'
import React from 'react'
import ReactDOM from 'react-dom'

const store = SubX.create({
  number: 0,
  decrease () {
    this.number -= 1
  },
  increase () {
    this.number += 1
  }
})

class App extends Component {
  render () {
    const store = this.props.store
    return <div>
      <button onClick={e => store.decrease()}>-</button>
      <span>{store.number}</span>
      <button onClick={e => store.increase()}>+</button>
    </div>
  }
}

ReactDOM.render(<App store={store} />, document.getElementById('root'))
