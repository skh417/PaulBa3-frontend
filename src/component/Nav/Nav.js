import React, { Component } from "react";
import NavDetail from "./NavDetail/NavDetail";
import "./Nav.scss";

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    hoveronOff = () => {
        this.setState({show: !this.state.show, })
    }

    render() {
        return (
            <div className={`Nav ${this.state.show ? "showList" : ""}`}>
                <div className="logoContainer" onMouseEnter={this.hoveronOff}>
                    <div className={`logo ${this.state.show ? "showList" : ""}`}></div>
                </div>
                <div className="navList" >
                    <ul onMouseEnter={this.hoveronOff}>
                        <li><span className="aboutUs">ABOUT US</span></li>
                        <li><span className="menu">MENU</span></li>
                        <li><span className="store">STORE</span></li>
                        <li><span className="society">SOCIETY</span></li>
                        <li><span className="new">WHAT'S NEW</span></li>
                        <li><span className="eShop">E-SHOP</span></li>
                    </ul>
                </div>
                <div className={`smallNavList ${this.state.show ? "showList" : ""}`}>
                    <ul>
                        <li><span>Login</span></li>
                        <li><span>Join</span></li>
                        <li><span>Contact us</span></li>
                        <li><span>Recruit</span></li>
                        <li><span>FAQ</span></li>
                    </ul>
                </div>
                {this.state.show && <NavDetail 
                    show={this.state.show} 
                    onMouseLeave={this.hoveronOff}
                />}
            </div>
        );
    }
}

export default Nav;