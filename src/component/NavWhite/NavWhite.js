import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import NavDetail from "../Nav/NavDetail/NavDetail";
import "./NavWhite.scss";

class NavWhite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      listShow: false,
    };
  }

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

  render() {
    return (
      <div className='NavWhite'>
        <Link to='/'>
          <div className='logoContainer' onMouseEnter={this.hoverOff}>
            <div className={`logo`}></div>
          </div>
        </Link>
        <div className='navList'>
          <ul onMouseEnter={this.hoveron}>
            <li>
              <span className='aboutUs'>ABOUT US</span>
            </li>
            <li>
              <span className='menu'>
                <Link to='/menu/coffee/0'>MENU</Link>
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
        <div className='smallNavList'>
          <ul>
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
          <NavDetail show={this.state.listShow} onMouseLeave={this.hoverOff} />
        )}
      </div>
    );
  }
}

export default withRouter(NavWhite);
