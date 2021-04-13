import React, {Component} from 'react';

export default class Toggle extends Component{
    constructor(){
        super();

        this.state = {
            textVisibility: "visible",
            buttonText: "Hide"
            
            // Example C
            // textVisible: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

handleClick() {
    if (this.state.textVisibility === "visible" && this.state.buttonText === "Hide"){
        this.setState({
            textVisibility: "hidden",
            buttonText: "Show"
        })
    }
    else{
        this.setState({
            textVisibility: "visible",
            buttonText: "Hide"
        })
    }


    // if (this.state.textVisible) {
    //     this.setState({ textVisible: false})
    // }
    // else {
    //     this.setState({textVisible: true})
    // }

    // example C
    // this.setState({textVisible: !this.state.textVisible})

    // Ternary Operators
    // this.setState({
    //     textVisibility: this.state.textVisibility === "visible" ? "hidden" : "visible",
    //     buttonText: this.state.buttonText === "Hide" ? "Show" : "Hide"
    // })
}



render(){
    return(
        <div className="toggle-wrapper">
            {/* example C */}
            {/* <h3 style={{ visibility: this.state.textVisibile ? "visible" : "hidden"}}>Hide Me!</h3> */}
            <h3 style={{ visibility: this.state.textVisibility }}>Hide Me!</h3>
            <button onClick={this.handleClick}>{this.state.buttonText}</button>
            {/* Example C */}
            {/* <button onClick={this.handleClick}>{this.state.textVisibility ? "Hide" : "Show"}</button> */}


        </div>
    )
}




}