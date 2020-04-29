import React, { Component } from "react";
import NavWhite from "../../../component/NavWhite/NavWhite";
import MenuDetailOne from "./MenuDetailOne/MenuDetailOne";
import MenuDetailTwo from "./MenuDetailTwo/MenuDetailTwo";
import MenuDetailThree from "./MenuDetailThree/MenuDetailTree";
import MenuFooter from "../MenuFooter/MenuFooter";
import Footer from "../../../component/Footer/Footer";
import "./MenuDetail.scss";

class MenuDetail extends Component {
  state = {
    coffee: null,
  };
  componentDidMount() {
    fetch("http://10.58.0.33:8000/menu/detail?product=Machiato")
      .then((data) => data.json())
      .then((data) => this.setState({ coffee: data }));
  }

  render() {
    const { coffee } = this.state;
    console.log(coffee);
    if (!coffee) return <></>;

    return (
      <>
        <NavWhite />
        <div className='MenuDetail'>
          <MenuDetailOne coffee={coffee} />
          <MenuDetailTwo coffee={coffee} />
          <MenuDetailThree />
          <div className='btnContainer'>
            <a href=''>LIST</a>
          </div>
          <MenuFooter />
        </div>
        <Footer />
      </>
    );
  }
}

export default MenuDetail;
