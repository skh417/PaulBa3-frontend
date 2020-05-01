import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./MenuFooter.scss";

class MenuFooter extends Component {
  constructor(){
    super();
    this.state = {
      changeClass: "",
    };
  }
  
  clickToMove = () => {
    window.scrollTo(0,0);
  }

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
            <Link to="/menu/coffee/0" 
              onClick={this.clickToMove}>COFFEE
            </Link>
          </li>
          <li>
            <Link to="/menu/beverage/0"
              onMouseEnter={this.beverageImgOn}
              onMouseLeave={this.beverageImgOff}
              onClick={this.clickToMove}
            >
              BEVERAGE
            </Link>
          </li>
          <li>
            <Link to="/menu/food/0" 
              onMouseEnter={this.foodImgOn} 
              onMouseLeave={this.foodImgOff} 
              onClick={this.clickToMove}>
              FOOD
            </Link>
          </li>
          <li>
            <Link to="/menu/ice-cream/0"
              onMouseEnter={this.icecreamImgOn}
              onMouseLeave={this.icecreamImgOff}
              onClick={this.clickToMove}
            >
              ICE-CREAM
            </Link>
          </li>
          <li>
            <Link to="/menu/product/0"
              onMouseEnter={this.productImgOn}
              onMouseLeave={this.productImgOff}
              onClick={this.clickToMove}
            >
              PRODUCT
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuFooter;
