import React, { Component } from 'react';


// Traditional Components
// import Alignment from "./traditionalComponents/alignment"
// import Toggle from "./traditionalComponents/toggle"
// import Counter from "./traditionalComponents/counter"
// import Resizer from "./traditionalComponents/resizer"
// import Color from "./traditionalComponents/color"
// import Clock from "./traditionalComponents/clock"


// Hooks Components
import Alignment from "./hooksComponents/alignment"
import Toggle from "./hooksComponents/toggle"
import Counter from "./hooksComponents/counter"
import Resizer from "./hooksComponents/resizer"
import Color from "./hooksComponents/color"
import Clock from "./hooksComponents/clock"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      showClock: true
    }
  }

  render() {
    return (
      <div className='app'>
      <Alignment />
      <hr />
      <Toggle />
      <hr />
      <Counter />
      <hr />
      <Resizer />
      <hr />
      <Color />
      <hr />
      {this.state.showClock ? <Clock  /> : null}
      <button onClick={() => this.setState({showClock: !this.state.showClock})}>Toggle Clock</button>
      <hr />
      </div>
    );
  }
}
