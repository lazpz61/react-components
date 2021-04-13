import React, { Component} from 'react';

export default class Resizer extends Component{
    constructor(){
        super();

        this.state = {
            textSize: 12,
            changeAmount: 1
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
handleClick(direction){
    this.setState({
        textSize: this.state.textSize + ( direction === "+" ? this.state.changeAmount : -this.state.changeAmount )
    })
}

handleChange(event) {
    this.setState({ changeAmount: parseInt(event.target.value)})
}



render() {
    return (
            <div className="resizer-wrapper">
            <h3 style={{ fontSize: `${this.state.textSize}px` }}>{`${this.state.textSize}px`}</h3>
            <input type="text" 
            value={this.state.changeAmount} 
            onChange={this.handleChange}
            />
            <button onClick={() => this.handleClick("+")}>Increase</button>
            <button onClick={() => this.handleClick("-")}>Decrease</button>
            </div>
        )
    }
}
