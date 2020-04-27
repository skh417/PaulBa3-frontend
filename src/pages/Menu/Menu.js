import React, { Component } from "react";
import Nav from "../../component/Nav/Nav";
import MenuList from "./MenuList/MenuList";
import Footer from "../../component/Footer/Footer";
import "./Menu.scss";

const category = [
  {
    coffee: {
      1: "Coffee",
      2: "Lattee",
      3: "Espresso",
      4: "Cold Brew",
      5: "Single Origin",
    },
    beverage: {
      1: "Frappe",
      2: "Tea Lattee",
      3: "Ade Juice",
      4: "Tea",
      5: "Chocolate",
      6: "Yogurt",
    },
    "ice-cream": {
      1: "Milk Ice-Cream",
      2: "Season Ice-Cream",
    },
    food: {
      1: "Bakery",
      2: "Morning foods",
      3: "Nata",
      4: "Cake Dessert",
    },
    product: {
      1: "Barista Pouch",
      2: "Whole bean",
      3: "Tumbler",
      4: "Mug",
      5: "ETC",
    },
  },
];

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
