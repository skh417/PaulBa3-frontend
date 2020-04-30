import React, { Component } from "react";
import "./MenuFooter.scss";

class MenuFooter extends Component {
  state = {
    changeClass: "",
  };

  beverageImgOn = () => {
    this.setState({
      changeClass: "beverageImg",
    });
    // console.log(this.state);
  };
  beverageImgOff = () => {
    this.setState({
      changeClass: "",
    });
  };
  foodImgOn = () => {
    this.setState({
      changeClass: "foodImg",
    });
  };
  foodImgOff = () => {
    this.setState({
      changeClass: "",
    });
  };
  icecreamImgOn = () => {
    this.setState({
      changeClass: "icecreamImg",
    });
  };
  icecreamImgOff = () => {
    this.setState({
      changeClass: "",
    });
  };
  productImgOn = () => {
    this.setState({
      changeClass: "productImg",
    });
  };
  productImgOff = () => {
    this.setState({
      changeClass: "",
    });
  };
  render() {
    const { changeClass } = this.state;

    return (
      <div className='MenuFooter'>
        <ul className={changeClass}>
          <li>
            <a>COFFEE</a>
          </li>
          <li>
            <a
              onMouseEnter={this.beverageImgOn}
              onMouseLeave={this.beverageImgOff}
            >
              BEVERAGE
            </a>
          </li>
          <li>
            <a onMouseEnter={this.foodImgOn} onMouseLeave={this.foodImgOff}>
              FOOD
            </a>
          </li>
          <li>
            <a
              onMouseEnter={this.icecreamImgOn}
              onMouseLeave={this.icecreamImgOff}
            >
              ICE-CREAM
            </a>
          </li>
          <li>
            <a
              onMouseEnter={this.productImgOn}
              onMouseLeave={this.productImgOff}
            >
              PRODUCT
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuFooter;
