import React, { Component } from "react";
import Nav from "../../component/Nav/Nav";
import MenuList from "./MenuList/MenuList";
import Footer from "../../component/Footer/Footer";
import "./Menu.scss";

const category = ["COFFEE", "BEVERAGE", "ICE-CREAM", "FOOD", "PRODUCT"];

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
    };
  }
  componentDidMount() {
    fetch("http://10.58.0.33:8000/menu/FOOD")
      .then((data) => data.json())
      .then((data) => this.setState({ menu: data }));
  }

  render() {
    const { menu } = this.state;
    // const filteredList = latte.filter((one) => {
    //     return one
    // })

    return (
      <>
        <Nav />
        <MenuList menu={menu} />
        <Footer />
      </>
    );
  }
}

export default Menu;
