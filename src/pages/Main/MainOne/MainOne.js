import React, { Component } from "react";
import "./MainOne.scss";

class MainOne extends Component {
    state = {
        banners: [],
        current: 1,
    }

    componentDidMount = () => {
        // 배너 값 받아오기
        fetch('/data/banner.json')
            .then(data => data.json())
            .then(data => this.setState({ banners: data },))
        this.changeCurrent()
    }

    // current값 바꾸기
     changeCurrent = () => {
        setInterval(() => {
            this.setState({ current: this.state.current + 1 })
        }, 2500)
    }

    currentBanner = (banners, current) => {
        // console.log(banners)
        const filterResult = banners.filter((banner) => {
            // current는 무한으로 올라가는데, 6나머지값 받아오기
            return banner.id === current % 6 + 1;
        }).concat({
            // ComponentDidMount 전에 올 가짜데이터 처리
            "id": 0,
            "img": "",
            "name": "",
            "description": ""
        })
        return filterResult[0];
    }

    render() {
        const banner = this.currentBanner(this.state.banners, this.state.current);
        return (
            <div className="MainOne" id="top">
                <div className={`mainBanner ${banner.img}`}>
                    <div className="mainText">
                        <p className="korName">{banner.name}</p>
                        <p className="description">{banner.description}</p>
                        <span className="detail">DETAIL VIEW</span>
                    </div>
                    <div className="slideNum">
                        <span className="nowPage">0{banner.id}</span>
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