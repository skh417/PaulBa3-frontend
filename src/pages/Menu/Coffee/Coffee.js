import React, { Component } from "react";
import Nav from "../../../component/Nav/Nav";
import Footer from "../../../component/Footer/Footer";
import "./Coffee.scss";
import icon from "../../../image/menu-coffee-test.jpg";

class Coffee extends Component {
    render() {
        return (
            <>
            <Nav />
            <div className="Coffee">
                <div className="topImage">
                    <img />
                    <div>
                        <span className="title">COFFE</span>
                        <br/>
                        <span>한잔의 완벽한 커피</span>
                    </div>
                </div>
                <div className="category">
                    <ul>
                        <li>전체</li>
                        <li>Coffee</li>
                        <li>Latte</li>
                        <li>Espresso</li>
                        <li>Cold Brew</li>
                        <li>Single Origin</li>
                    </ul>
                </div>
                <div className="menuConatinaer">
                    <div className="menuList">
                        <ul>
                            <li>
                                <a href="" />
                                <div >
                                    <img className="icon" src={icon}/>
                                    <div className="text">
                                        아이스 룽고 <span>Iced Lungo</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default Coffee;