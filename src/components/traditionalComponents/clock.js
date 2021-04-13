import React, {Component} from 'react';


export default class Clock extends Component {
    constructor(){
        super();

        this.state ={
            time: new Date()
        }

        this.handleTick = this.handleTick.bind(this);
    }


componentDidMount(){
    this.intervalId = setInterval(this.handleTick, 1000)
}

componentWillUnmount() {
    clearInterval(this.intervalId)
}

handleTick() {
    this.setState({ time: new Date()})
}

formatTime(){
    const time = this.state.time
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()


    const formattedHours = hours <=12 ? hours : hours - 12
    const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`
    const formattedSeconds = seconds >= 10 ? seconds : `0${seconds}`

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}


render(){
    

    return (
        <div className="clock-wrapper">
           <h3>{this.formatTime()}</h3>
        </div>
    )
}
}