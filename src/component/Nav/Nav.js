import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import NavDetail from "./NavDetail/NavDetail";
import "./Nav.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      listShow: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollTo);
  }

  scrollTo = () => {
    let currentY = window.pageYOffset || document.documentElement.scrollTop;
    if (currentY === 0) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  hoveron = () => {
    this.setState({ show: true, listShow: true });
  };

  hoverOff = () => {
    let currentY = window.pageYOffset || document.documentElement.scrollTop;
    if (currentY === 0) {
      this.setState({ show: false, listShow: false });
    } else {
      this.setState({ show: true, listShow: false });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollTo);
  }

  render() {
    return (
      <div className={`Nav ${this.state.show ? "showList" : ""}`}>
        <Link to='/'>
          <div className='logoContainer' onMouseEnter={this.hoverOff}>
            <div className={`logo ${this.state.show ? "showList" : ""}`}></div>
          </div>
        </Link>
        <div className='navList'>
          <ul onMouseEnter={this.hoveron}>
            <li>
              <span className='aboutUs'>ABOUT US</span>
            </li>
            <li>
              <span className='menu'>MENU</span>
            </li>
            <li>
              <span className='store'>STORE</span>
            </li>
            <li>
              <span className='society'>SOCIETY</span>
            </li>
            <li>
              <span className='new'>WHAT'S NEW</span>
            </li>
            <li>
              <span className='eShop'>E-SHOP</span>
            </li>
          </ul>
        </div>
        <div className={`smallNavList ${this.state.show ? "showList" : ""}`}>
          <ul>
            <li>
              <span>Login</span>
            </li>
            <li>
              <span>Join</span>
            </li>
            <li>
              <span>Contact us</span>
            </li>
            <li>
              <span>Recruit</span>
            </li>
            <li>
              <span>FAQ</span>
            </li>
          </ul>
        </div>
        {this.state.show && (
          <NavDetail show={this.state.listShow} onMouseLeave={this.hoverOff} />
        )}
      </div>
    );
  }
}

export default withRouter(Nav);
