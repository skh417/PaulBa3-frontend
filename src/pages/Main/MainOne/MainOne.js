import React, { Component } from "react";
import "./MainOne.scss";

const mainBanner = {
    one: {
        id: 1,
        imgNum: 1,
        name: "카라멜 마키아토",
        description: "지친 일상에 달콤한 위로가 되어줄 커피"
    },
    two: {
        id: 2,
        imgNum: 2,
        name: "MALCHA",
        description: "폴 바셋에서 싱그러운 봄을 만나보세요."
    },
    three: {
        id: 3,
        imgNum: 3,
        name: "깊고 부드러운 초콜릿 아이스크림",
        description: "깊고 풍부한 발로나 초콜릿과 상하목장 원유의 만남"
    },
    four: {
        id: 4,
        imgNum: 4,
        name: "프리미엄 과일 블렌딩티",
        description: "프랑스 프리미엄 티 포숑으로 만든 상큼한 과일티"
    },
    five: {
        id: 5,
        imgNum: 5,
        name: "시그니처 앵글 머그",
        description: "폴 바셋 시그니처 디자인 머그"
    },
    six: {
        id: 6,
        imgNum: 6,
        name: "5월 가정의 달 쿠폰 틴케이스",
        description: "쿠폰 틴케이스 구매하시고, 5월의 다양한 혜택을 즐겨보세요"
    }
}

class MainOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mainBanner: [
                {
                    imgNum: 1, name: "카라멜 마키아토", description: "지친 일상에 달콤한 위로가 되어줄 커피"
                },
            ],
            imgNum: 1,
        }
    }

    // componentDidMount = () => {
    //     this.changeImg = setInterval(this.changeImg, 1000);
    // }

    // componentWillUnmount = () => {
    //     clearInterval(this.changeImg);
    // }

    // changeBanner = () => {
    //     this.state.mainbanner[i] > 5
    //         ? this.setState({ imgNum: 1 })
    //         : this.setState({ imgNum: this.state.imgNum + 1})
    // }

    render() {
        return (
            <div className="MainOne">
                <div className={`mainBanner img${mainBanner.one.imgNum}`}>
                    <div className="mainText">
                        <p className="korName">{this.state.mainBanner[0].name}</p>
                        <p className="description">{this.state.mainBanner[0].description}</p>
                        <span className="detail">DETAIL VIEW</span>
                    </div>
                    <div className="slideNum">
                        <span className="nowPage">01</span>
                        <span className="allPage">06</span>
                    </div>
                    <div className="slideControll">
                        <span className="prev"></span>
                        <span className="next"></span>
                    </div>
                    <div className="recommend">
                        <div>
                            <div className="logo"></div>
                            <div className="text">추천메뉴</div>
                        </div>
                    </div>
                    <div className="mainSns">
                        <a
                            href="https://www.facebook.com/paulbassettkorea/"
                            target="_blank"
                            className="facebook"
        >{""}</a>
                        <a
                            href="https://www.instagram.com/paulbassettkorea/"
                            target="_blank"
                            className="instagram"
                        ></a>
                        <a
                            href="https://www.baristapaulbassett.co.kr/society/MobileApp.pb"
                            target="_blank"
                            className="app"
                        ></a>
                    </div>
                    <div className="findStore">
                        <div className="logo"></div>
                        <div>FIND A STORE</div>
                    </div>
                    <div className="mainNotice">
                        <div className="container">
                            <div className="title">NOTICE</div>
                            <div className="list">공지사항 제목 [추후 DB연동]</div>
                            <div className="next"></div>
                        </div>
                    </div>
                    <div className="scroll">
                        <div className="fixed"></div>
                        <div className="text">SCROLL</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainOne