import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HomeNav from "../../component/HomeNav/HomeNav";
import MenuList from "./MenuList/MenuList";
import Footer from "../../component/Footer/Footer";
import { BASE_URL } from "../../Config";
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
    const { category, id } = this.props.match.params;
    console.log({ category, id });
    fetch(`${BASE_URL}/menu/${category}/${id}`)
      .then((data) => data.json())
      .then((data) => this.setState({ menu: data }));
  }

  componentDidUpdate(prevProps) {
    const { category } = this.props.match.params;
    if (prevProps.match.params.category !== category) {
      fetch(`${BASE_URL}/menu/${category}/0`)
        .then((data) => data.json())
        .then((data) => this.setState({ menu: data }));
    }
  }

  render() {
    const { products } = this.state.menu;

    return (
      <>
        <HomeNav />
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
