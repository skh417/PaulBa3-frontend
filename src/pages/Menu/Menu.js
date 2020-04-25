import React, { Component } from "react";
import Nav from "../../component/Nav/Nav";
import CoffeeList from "./CoffeeList/CoffeeList";
import Footer from "../../component/Footer/Footer"
import "./Menu.scss";

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            coffee: [],
        }
    }
    componentDidMount() {
        fetch("http://10.58.0.33:8000/menu/COFFEE/1")
            .then(data => data.json())
            .then(data => this.setState({coffee: data}));
    }

    render() {
        const { coffee } = this.state;
        // const filteredList = latte.filter((one) => {
        //     return one
        // })

        return (
            <>
            <Nav />
            <CoffeeList coffee={coffee}/>
            <Footer />
            </>
        );
    }
}

export default Menu;