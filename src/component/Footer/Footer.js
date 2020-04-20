import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="menu">
                    <ul>
                        <li>개인정보처리방침</li>
                        <li>신규입점안내</li>
                        <li>이용약관</li>
                        <li>소사이어티카드 이용약관</li>
                        <li>기프트카드 이용약관</li>
                        <li>FAQ</li>
                        <li>사이트맵</li>
                    </ul>
                </div>
                <div className="companyInfo">
                    엠즈씨드(주) 대표이사 : 김용철 주소 : 서울특별시 강남구 도산대로 75길 22 (청담동)
                    <br />
                    사업자등록번호 211-88-95935 대표번호 1899-8829 개인정보관리책임자 : 정의천 <span>© 2019 m’s seed Co., Ltd. All rights reserved.</span>
                </div>
                <br />
                <div className="moreInfo">
                    <ul>
                        <li><img src="https://www.baristapaulbassett.co.kr/images/common/footer01.png" /></li>
                        <li><img src="https://www.baristapaulbassett.co.kr/images/common/footer02.png" alt="2017년 제 19회 대한민국 브랜드 대상 산업정책 연구원이사장상" /></li>
                    </ul>
                    <div className="sns">
                        <a 
                            href="https://www.facebook.com/paulbassettkorea/" 
                            target="_blank"
                            className="facebook">
                            
                        </a>
                        <a 
                            href="https://www.instagram.com/paulbassettkorea/" 
                            target="_blank"
                            className="instagram">
                        </a>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;