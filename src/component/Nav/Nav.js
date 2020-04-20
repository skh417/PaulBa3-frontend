import React, { Component } from "react";
import NavDetail from "./NavDetail/NavDetail";
import "./Nav.scss";
import logo from "../../image/logo.png";
import logoOn from "../../image/logo_on.png"

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: "none",
            bgColor: "rgba(0,0,0,0.2)",
            fontColor: "white",
            logo: logo,
            smallNavColor: "rgba(255,255,255,0.7)",
        }
    }

    hoverOn = () => {
        this.setState({ 
            show: "block", 
            bgColor: "white", 
            fontColor: "black", 
            logo: logoOn,
            smallNavColor: "#969696",
        })
    }

    hoverOff = () => {
        this.setState({ 
            show: "none", 
            bgColor: "rgba(0,0,0,0.2)", 
            fontColor: "white", 
            logo: logo,
            smallNavColor: "rgba(255,255,255,0.7)",
        })
    }

    render() {
        return (
            <div 
                className="Nav" 
                style={{backgroundColor: this.state.bgColor, color: this.state.fontColor}}
            >
                <div className="logo"><img src={this.state.logo} /></div>
                <div className="navList">
                    <ul 
                        onMouseOver={this.hoverOn}
                        onMouseLeave={this.hoverOff}
                    >
                        <li><span className="aboutUs">ABOUT US</span></li>
                        <li><span className="menu">MENU</span></li>
                        <li><span className="store">STORE</span></li>
                        <li><span className="society">SOCIETY</span></li>
                        <li><span className="new">WHAT'S NEW</span></li>
                        <li><span className="eShop">E-SHOP</span></li>
                    </ul>
                </div>
                <div 
                    className="smallNavList" 
                    style={{color: this.state.smallNavColor}}
                >
                    <ul>
                        <li><span>Login</span></li>
                        <li><span>Join</span></li>
                        <li><span>Contact us</span></li>
                        <li><span>Recruit</span></li>
                        <li><span>FAQ</span></li>
                    </ul>
                </div>
                <NavDetail show={this.state.show}/>
            </div>
        );
    }
}

export default Nav;