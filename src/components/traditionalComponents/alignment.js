import React, {Component} from "react";



export default class Alignment extends Component {
    constructor() {
        super()

        this.state = {
            alignment: "left"
            
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(newAlignment) {
        this.setState({ alignment: newAlignment})
    }
    render() {
        return (
            <div className="alignment-wrapper">
                <h3 style={{ textAlign: this.state.alignment}}>Align Me!</h3>
                <button onClick={ () => this.handleClick("left")}>Left</button>
                <button onClick={ () => this.handleClick("center")}>Center</button>
                <button onClick={ () => this.handleClick("right")}>Right</button>
            </div>

        )
    }
}