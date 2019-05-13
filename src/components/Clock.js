import ReactDOM from 'react-dom'
import React from 'react'

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }

    render(){
        return (
            <div>
                 {this.state.date.toLocaleTimeString()}
            </div>
        );
    }

    tick(){
        this.setState({date:new Date()});
    }

    componentDidMount(){
        this.intervalId = setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval( this.intervalId);
    }


}

export default Clock;
