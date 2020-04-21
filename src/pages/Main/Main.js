import React, { Component } from "react";
import "./Main.scss";

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgNum: 1,
        }
    }

    // componentDidMount = () => {
    //     this.changeImg = setInterval(this.changeImg, 1000);
    // }

    // componentWillUnmount = () => {
    //     clearInterval(this.changeImg);
    // }

    // changeImg = () => {
    //     this.state.imgNum > 5
    //         ? this.setState({ imgNum: 1 })
    //         : this.setState({ imgNum: this.state.imgNum + 1})
    // }

    render() {
        return (
            <div className="Main">
                <div className="mainSectionOne">
                    <div className={`mainBanner img${this.state.imgNum}`}>
                        <div className="mainText">
                            <p className="korName">카라멜 마키아토</p>
                            <p className="description">지친 일상에 달콤한 위로가 되어줄 커피</p>
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
                            ></a>
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
                <div className="mainSectionTwo"></div>
            </div>
        );
    }
}

export default Main;