import React, { Component } from "react";
import "./MenuDetail.scss";

class MenuDetail extends Component {
    state = {
        one: [],
    }
    componentDidMount() {
        fetch('/data/test.json')
            .then( data => data.json())
            .then( data => this.setState({one: data}, 
                () => {console.log(this.state.one)}))
    }

    render() {
        return(
            <div className="menuDetail">
                <div className="menuTitle">
                    <dl>
                        <dt>
                            <span>Machiato</span>
                            마키아토
                        </dt>
                        <dd>
                            에스프레소의 소량의 우유 거품을 더해 부드러우면서 진한 커피의 조화로운 맛을 느낄 수 있습죠.
                        </dd>
                    </dl>
                    <div className="menuImgContainer"></div>
                    <ul className="infomation">
                        <li>
                            <span>구분</span>
                        </li>
                        <li>
                            <span>알레르기 유발물질</span>
                        </li>
                        <li>
                            <span>제공사이즈</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuDetail