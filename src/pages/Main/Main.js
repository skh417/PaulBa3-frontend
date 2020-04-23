import React, { Component } from "react";
import MainOne from "./MainOne/MainOne";
import MainTwo from "./MainTwo/MainTwo";
import "./Main.scss";

class Main extends Component {

    handleScroll = (e) => {
        console.log(e)
    }

    render() {
        return (
            <div className="Main">
                <MainOne />
                <MainTwo />
            </div>
        );
    }
}

export default Main;