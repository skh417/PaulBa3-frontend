import React, { Component } from "react";
import Nav from "../../component/Nav/Nav";
import CoffeeList from "./CoffeeList/CoffeeList";
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
            <Nav />
            <CoffeeList />
            </>
        );
    }
}

export default Menu;