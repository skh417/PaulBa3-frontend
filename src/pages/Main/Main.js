import React, { Component } from "react";
import MainOne from "./MainOne/MainOne";
import MainTwo from "./MainTwo/MainTwo";
import "./Main.scss";

class Main extends Component {
    constructor(props) {
        super(props);
        this.oneRef = React.createRef();
        this.twoRef = React.createRef();
    }

    moveScroll = (e) => {
        if (e.nativeEvent.wheelDelta > 0) {
            // oneReft로 이동
            console.log('oneRef로')
            window.scroll({
                top: this.oneRef.offsetTop, 
                left: 0,
                behavior: 'smooth',
            })
        } else {
            // twoRef로 이동
            console.log('twoRef로')
            window.scroll({
                top: this.twoRef.offsetTop, 
                left: 0,
                behavior: 'smooth',
            })
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