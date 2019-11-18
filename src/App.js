import React from 'react';
// import PropTypes from 'prop-types';

// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => { console.log("I'm clocked") }} />
//       </React.Fragment>
//     )

//   }
// }

const App = () => (<Counter></Counter>)

class Counter extends React.Component {
  // 初期化処理が実行される
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlussButton = () => {
    console.log("handlePlussButton")
    console.log(this.state.count)
    // const count = this.state.count
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    console.log(this.state.count)
    // const count = this.state.count
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    console.log("")
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlussButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>

    )
  }
}


export default App;
