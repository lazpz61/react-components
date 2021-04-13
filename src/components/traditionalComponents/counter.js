import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(){
        super();

        this.state = {
            value: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

handleClick(direction) {
    this.setState({
        value: direction === "+" ? this.state.value + 1 : this.state.value -1
        // Second way to do this to remove duplicate code
        // value: this.state.value + ( direction === "+" ?  + 1 : -1)
    })
}

render(){
    return(
        <div className="counter-wrapper">
            <button onClick={() => this.handleClick("+")}>Up</button>
            <h3>{this.state.value}</h3>
            <button onClick={() => this.handleClick("-")}>Down</button>

        </div>

    )
}


}