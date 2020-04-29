import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../component/Nav/Nav";
import MenuList from "./MenuList/MenuList";
import Footer from "../../component/Footer/Footer";
import "./Menu.scss";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
      num: 0,
    };
  }
  componentDidMount() {
    const { category } = this.props.match.params;
    fetch(`http://10.58.0.33:8000/menu/${category}/0`)
      .then((data) => data.json())
      .then((data) => this.setState({ menu: data }));
  }

  render() {
    const { products } = this.state.menu;

    return (
      <>
        <Nav />
        <MenuList
          products={products}
          category={this.props.match.params.category}
        />
        <Footer />
      </>
    );
  }
}

export default withRouter(Menu);
