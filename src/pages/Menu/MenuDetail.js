import React, { Component } from "react";
import "./MenuDetail.scss";

class MenuDetail extends Component {
    state = {
        coffee: null,
    }
    componentDidMount() {
        fetch("http://10.58.0.25:8000/menu/detail?product=Machiato")
            .then( data => data.json())
            .then( data => this.setState({coffee: data}))
    }

    render() {
        const { coffee } = this.state;
        console.log(coffee)
        if (!coffee) return (<></>);

        return(
            <div className="menuDetailBG">
                <div className="menuDetail">
                    <div className="menuTitle">
                        <dl>
                            <dt>
                                <span>{coffee.menu.name_eng}</span>
                                {coffee.menu.name_kor}
                            </dt>
                            <dd>
                                {coffee.menu.description}
                            </dd>
                        </dl>
                    </div>
                    <div className="menuImgContainer"></div>
                    <ul className="infomation">
                        <li>
                            <span>구분</span>
                            {coffee.info.sort}
                        </li>
                        <li>
                            <span>알레르기 유발물질</span>
                            {coffee.info.allergy}
                        </li>
                        <li>
                            <span>제공사이즈</span>
                            {coffee.info.sizes}
                        </li>
                    </ul>
                    <div className="nutriContainer">
                        <div className="nutriTitle">    
                            <span>
                                영양 정보
                                <span>1회 제공량 기준</span>
                            </span>
                            <select>
                                <option>Original</option>
                            </select>
                        </div>
                        <div className="nutriContents">
                            <div>
                                <span className="sizeML">
                                    제공량(ml)
                                    <span>70</span>
                                </span>
                                <ul className="nutriDetails">
                                    <li>
                                        <span className="tit">열량(kcal)</span>
                                        <span className="nums">45</span>
                                    </li>
                                    <li>
                                        <span className="tit">단백질(g)</span>
                                        <span className="nums">2</span>
                                    </li>
                                    <li>
                                        <span className="tit">당류(g)</span>
                                        <span className="nums">2</span>
                                    </li>
                                    <li>
                                        <span className="tit">나트륨(mg)</span>
                                        <span className="nums">20</span>
                                    </li>
                                    <li>
                                        <span className="tit">포화지방(g)</span>
                                        <span className="nums">2.2</span>
                                    </li>
                                    <li>
                                        <span className="tit">카페인(mg)</span>
                                        <span className="nums">81</span>
                                    </li>
                                </ul>
                                <p>* 우유가 추가된 음료의 영양정보는 오리지널 우유 기준입니다.</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuDetail