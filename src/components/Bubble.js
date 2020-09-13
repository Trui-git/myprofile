import React, { Component } from 'react'
import './Bubble.css';

export default class Bubble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageHeight:  window.innerHeight,
            pageWidth: window.innerWidth    
        };
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    
    updateDimensions = () => {
        this.setState({pageWidth: window.innerWidth, pageHeight: window.innerHeight});
        console.log(document.body.scrollHeight);
    }

    render() {      
        return(
            <BubbleConstruct pageWidth={this.state.pageWidth} pageHeight={this.state.pageHeight} />
        );
    }
}

class BubbleConstruct extends Component{
    constructor(props) {
        super(props);
        
        const size = Math.floor(Math.random() * 7) + 4;
        const bubbleWidth = Math.floor(Math.random() * 7) + 4;        

        this.state = { 
            newTop: this.props.pageHeight, 
            speed: size * .2, 
            newHeight: bubbleWidth - 1,
            newLeft: Math.floor(Math.random() * this.props.pageWidth),
            newWidth: bubbleWidth      
        };
    }

    Move() {
        this.setState({newTop: this.state.newTop - this.state.speed});
        if (this.state.newTop < -10) {
            this.Reset();
        }
    } // Move Bubble

    Reset() {
        this.setState({newTop: this.props.pageHeight})
    }

    tick() {
        this.Move();
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(), 100
        );
    }
    render() {
       
        return (
            <div className="bubble" 
                style={{
                    width: this.state.newWidth, 
                    height: this.state.newHeight,
                    left: this.state.newLeft,
                    top: this.state.newTop,                
                }} 
            />
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

}