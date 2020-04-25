import React, { Component } from "react";
import Nav from "../../../component/Nav/Nav";
import Coffee from "./Coffee/Coffee";
import "./CoffeeList.scss";


class CoffeeList extends Component {
    render() {
        // const { coffee } = this.props;

        return (
            <>
            <Nav />
            <div className="CoffeeList">
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
                    <Coffee 
                        // key={coffee.id}
                        // id={coffee.id}
                        // name={coffee.name}

                    />
                </div>
            </div>
            </>
        );
    }
}

export default CoffeeList;