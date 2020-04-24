import React, { Component } from "react";
import MainOne from "./MainOne/MainOne";
import MainTwo from "./MainTwo/MainTwo";
import "./Main.scss";

class Main extends Component {
    constructor(props) {
        super(props);
        this.oneRef = React.createRef();
        this.twoRef = React.createRef();
        this.state = {
            nowTop: 0,
        }
    }

    componentDidMount() {
        // window.addEventListener('scroll', this.moveScroll);
    }

    moveScroll = (e) => {
        // console.log('moveScroll 함수 작동')
        console.log('oneRef.offsetTop', this.oneRef.offsetTop)
        console.log('twoRef.offsetTop', this.twoRef.offsetTop)
        
        if (e.nativeEvent.wheelDelta > 0) {
            // oneReft로 이동
            console.log('oneRef로')
            // window.scroll(0, this.oneRef.offsetTop)
            this.setState({nowTop: this.oneRef.offsetTop}, () => window.scrollTo(0, this.state.nowTop))
        
        } else {
            // twoRef로 이동
            console.log('twoRef로')
            // window.scroll(0, this.twoRef.offsetTop)
            this.setState({nowTop: this.twoRef.offsetTop}, () => window.scrollTo(0, this.state.nowTop))
        }
        
    }

    render() {

        return (
            <div className="Main" onWheel={this.moveScroll}>
                <div 
                    ref={(ref) => { this.oneRef = ref }} 
                >
                    <MainOne />
                </div>
                <div 
                    ref={(ref) => { this.twoRef = ref }}
                >
                    <MainTwo />
                </div>
            </div>
        );
    }
}

export default Main;