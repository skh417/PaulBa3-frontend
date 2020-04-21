import React, { Component } from "react";
import "./NavDetail.scss";

class NavDetail extends Component {

    render() {
        return (
            <div 
                className={this.props.show ? "NavDetail show" : "NavDetail unShown"}
                onMouseLeave={this.props.onMouseLeave}
            >
                
                <div>
                    <ul className="aboutList">
                        <li>WBC 챔피언 폴 바셋</li>
                        <li>CEO 인사말</li>
                        <li>Brand</li>
                        <li>Barista</li>
                        <li>Social Contribution</li>
                    </ul>

                    <ul className="menuList">
                        <li>NEW</li>
                        <li>COFFEE</li>
                        <li>BEVERAGE</li>
                        <li>ICE-CREAM</li>
                        <li>FOOD</li>
                        <li>PRODUCT</li>
                    </ul>
                    <ul className="storeList">
                        <li>매장찾기</li>
                    </ul>
                    <ul className="societyList">
                        <li>Paul Bassett Society</li>
                        <li>회원 등급 혜택</li>
                        <li>모바일 App안내</li>
                        <li>e-Stamp 안내</li>
                        <li>e-Card 안내</li>
                        <li>제휴혜택 안내</li>
                    </ul>
                    <ul className="newList">
                        <li>Event / News</li>
                        <li>Coffee Class</li>
                        <li>Notice</li>
                    </ul>
                    <ul className="eShopList">
                        <li style={{fontWeight: "bold"}}>E-SHOP 소개</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavDetail;