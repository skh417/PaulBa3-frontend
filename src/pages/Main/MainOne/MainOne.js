import React, { Component } from "react";
import "./MainOne.scss";

const main = {
    banner1: {
        id: 1,
        img1: "img1",
        name: "카라멜 마키아토",
        description: "지친 일상에 달콤한 위로가 되어줄 커피"
    },
    banner2: {
        id: 2,
        img2: "img2",
        name: "MALCHA",
        description: "폴 바셋에서 싱그러운 봄을 만나보세요."
    },
    banner3: {
        id: 3,
        img3: "img3",
        name: "깊고 부드러운 초콜릿 아이스크림",
        description: "깊고 풍부한 발로나 초콜릿과 상하목장 원유의 만남"
    },
    banner4: {
        id: 4,
        img4: "img4",
        name: "프리미엄 과일 블렌딩티",
        description: "프랑스 프리미엄 티 포숑으로 만든 상큼한 과일티"
    },
    banner5: {
        id: 5,
        img5: "img5",
        name: "시그니처 앵글 머그",
        description: "폴 바셋 시그니처 디자인 머그"
    },
    banner6: {
        id: 6,
        img6: "img6",
        name: "5월 가정의 달 쿠폰 틴케이스",
        description: "쿠폰 틴케이스 구매하시고, 5월의 다양한 혜택을 즐겨보세요"
    }
}

class MainOne extends Component {
    
    componentDidMount = () => {
        this.changeBanner()
        // this.changeBanner = setInterval(this.changeBanner, 1000);
    }
    // componentWillUnmount = () => {
    //     clearInterval(this.changeBanner);
    // }
    changeBanner = () => {        
        for (var i = 0; i<Object.keys(main).length; i++) {
            if (i > 6) {
                i = 0;
                console.log('0', Object.keys(main)[i])
            } else {
                console.log('!0', Object.keys(main)[i]);
            }
            // console.log(Object.keys(main)[i]);
        }
        /*
        // for(var i = 0; i < Object.keys(main).length; i++) {
        //     console.log(i)
        //     if (i > 6) {
        //         i = 0
        //     }
        // }
        */
    }

    render() {
        return (
            <div className="MainOne" id="top">
                <div className={`mainBanner ${main.banner1.img1}`}>
                    <div className="mainText">
                        <p className="korName">{main.banner1.name}</p>
                        <p className="description">{main.banner1.description}</p>
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
                        >{""}</a>
                        <a
                            href="https://www.baristapaulbassett.co.kr/society/MobileApp.pb"
                            target="_blank"
                            className="app"
                        >{""}</a>
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