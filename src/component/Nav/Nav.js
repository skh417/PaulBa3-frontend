import React, { Component } from "react";
import NavDetail from "./NavDetail/NavDetail";
import "./Nav.scss";

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            listShow: false,
        }
    }

    scrollTo = () => {
        var currentY = window.pageYOffset || document.documentElement.scrollTop;
        if (currentY === 0) {
            this.setState({ show: false, })
        } else {
            this.setState({ show: true, })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollTo);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollTo);
    }

    hoveronOff = () => {
        this.setState({ 
            show: true, 
            listShow: !this.state.listShow,
        })
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
                    show={this.state.listShow}
                    onMouseLeave={this.hoveronOff}
                />}
            </div>
        );
    }
}

export default Nav;