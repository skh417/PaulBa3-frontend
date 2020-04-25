import React, { Component } from "react";
import "./Menu.scss";

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            latte: [],
        }
    }
    componentDidMount() {
        fetch("http://10.58.7.104:8000/menus")
            .then(data => data.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <>
                <div className="Menu">
                    Menu
                </div>
            </>
        );
    }
}

export default Menu;