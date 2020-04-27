import React, { Component } from "react";
import MenuDetailFooter from "./MenuDetailFooter"
import NavWhite from "../../component/NavWhite/NavWhite"
import Footer from "../../component/Footer/Footer"
import "./MenuDetail.scss";

class MenuDetail extends Component {

    state = {
        coffee: null,
    }
    componentDidMount() {
        fetch("http://10.58.0.33:8000/menu/detail?product=Machiato")
            .then( data => data.json())
            .then( data => this.setState({coffee: data}))
    }


    render() {
        const { coffee } = this.state;
        console.log(coffee)
        if (!coffee) return (<></>);

        return(
            <>
            <NavWhite />
            <div className="MenuDetail">
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
                        <div className="menuImgContainer">
                          
                            <img src={`https://www.baristapaulbassett.co.kr${coffee.menu.images[0]}`} />
                           
                          
                        </div>
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
                <div className="bestMenu">
                    <h2>BEST MENU</h2>
                    <div className="bestImgContainer">
                        <div className="best">
                            <img src="https://www.baristapaulbassett.co.kr/upload/product/A/thumbnail_1_201903211031182001.jpg" art="" />
                            <div className="korName">
                                룽고
                                <span className="engName">lungo</span>
                            </div>
                        </div>
                        <div className="best">
                            <img src="https://www.baristapaulbassett.co.kr/upload/product/A/thumbnail_1_201903211053056601.jpg" art="" />
                            <div className="korName">
                                카페라떼
                                <span className="engName">Cafe Latte</span>
                            </div>
                        </div>
                        <div className="best">
                            <img src="https://www.baristapaulbassett.co.kr/upload/product/A/thumbnail_1_201903211048508581.jpg" art="" />
                            <div className="korName">
                                아이스크림 라떼
                                <span className="engName">Icecream Latte</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="espressoStyle">
                    <h2>5S FOR SWEET DESSERT STYLE ESPRESSO</h2>
                    <ul>
                      <li>
                        <img src="https://www.baristapaulbassett.co.kr/images/menu/espressoStyle01.png" alt="" />
                        <span>전체 생산량의 7% 미만인 최상급 스페셜티 생두를 전세계 커피 산지와 농장에서 직접 선별합니다.</span>
                      </li>
                      <li>
                        <img src="https://www.baristapaulbassett.co.kr/images/menu/espressoStyle02.png" alt="" />
                        <span>Grain-Pro방식의 폴바셋 생두는 향미보존에 적합한 온도(15~20℃), 습도(55~60%)가 유지되는 항온·습 창고에 보관됩니다.</span>
                      </li>
                      <li>
                        <img src="https://www.baristapaulbassett.co.kr/images/menu/espressoStyle03.png" alt="" />
                        <span>좋은 원두가 가진 향미를 최고의 상태로 선보이기 위해 로스팅 후 4~8일 사이의 원두로만 에스프레소를 만듭니다.</span>
                      </li>
                      <li>
                        <img src="https://www.baristapaulbassett.co.kr/images/menu/espressoStyle04.png" alt="" />
                        <span>최적의 크기로 분쇄된 스페셜티 커피 25g을 트리플 바스켓에 담아 에스프레소를 추출합니다.</span>
                      </li>
                      <li>
                        <img src="https://www.baristapaulbassett.co.kr/images/menu/espressoStyle05.png" alt="" />
                        <span>에스프레소가 짙은 갈색에서 옅은 색의 변화까지 약 24ml의 에센스만 추출해 단맛, 신맛, 바디의 밸런스를 구현합니다.</span>
                      </li>
                    </ul>
                </div>
                <div className="btnContainer">
                    <a href="">LIST</a>
                </div>
                <MenuDetailFooter />
            </div>
            <Footer />
            </>
        )
    }
}

export default MenuDetail