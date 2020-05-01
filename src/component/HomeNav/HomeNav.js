import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNavDetail from "./HomeNavDetail/HomeNavDetail";
import "./HomeNav.scss";

class HomeNav extends Component {
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
      <div
        className={`HomeNav ${this.state.show ? "showList" : ""}`}
        style={{ display: this.props.navShow }}
      >
        <Link to='/'>
          <div className='logoContainer' onMouseEnter={this.hoverOff}>
            <div className={`logo ${this.state.show ? "showList" : ""}`}></div>
          </div>
        </Link>
        <div className={`navList ${this.state.show ? "showFont" : ""}`}>
          <ul onMouseEnter={this.hoveron}>
            <li>
              <span className='aboutUs'>ABOUT US</span>
            </li>
            <li>
              <span>
                <Link to='/menu/coffee/0' className='menu'>
                  MENU
                </Link>
              </span>
            </li>
            <li>
              <span className='store'>
                <Link to='/store'>STORE</Link>
              </span>
            </li>
            <li>
              <span className='society'>
                <Link to='/'>SOCIETY</Link>
              </span>
            </li>
            <li>
              <span className='new'>
                <Link to='/'>WHAT'S NEW</Link>
              </span>
            </li>
            <li>
              <span className='eShop'>
                <Link to='/'>E-SHOP</Link>
              </span>
            </li>
          </ul>
        </div>
        <div className={`smallNavList ${this.state.show ? "showList" : ""}`}>
          <ul className={`${this.state.show ? "showFont" : ""}`}>
            <li>
              <Link to='/login'>
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link to='/signup'>
                <span>Join</span>
              </Link>
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
          <HomeNavDetail
            show={this.state.listShow}
            onMouseLeave={this.hoverOff}
          />
        )}
      </div>
    );
  }
}

export default HomeNav;
