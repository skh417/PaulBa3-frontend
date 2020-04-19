import React, { Component } from "react";
import "./Coffee.scss";
import coffeTopImage from "../../../image/menu-coffee-topimage.jpg";

class Coffee extends Component {
    render() {
        return (
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
                        <li>Lattee</li>
                        <li>Espresso</li>
                        <li>Cold Brew</li>
                        <li>Single Origin</li>
                    </ul>
                </div>
                <div className="menuList">

                </div>
            </div>
        );
    }
}

export default Coffee;