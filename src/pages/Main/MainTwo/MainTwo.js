import React, { Component } from "react";
import "./MainTwo.scss";
import bottomImgOne from "../../../image/buttomBanner-1.jpg";
import bottomImgTwo from "../../../image/buttomBanner-2.jpg";
import bottomImgThree from "../../../image/buttomBanner-3.jpg";

class MainTwo extends Component {
    state = {
        veryLeft: 50,
    }

    scrollHorizontal = (e) => {
        if (e.nativeEvent.wheelDelta > 0) {
            // 마우스 휠 UP
            this.setState({
                veryLeft: this.state.veryLeft + 100
            })
            if (this.state.veryLeft >= 50) {
                this.setState({veryLeft: 50})
            }
        } else {
            // 마우스 휠 DOWN
            this.setState({
                veryLeft: this.state.veryLeft - 100
            })
            // console.log('width', window.innerWidth / document.documentElement.clientWidth * 100)
            // console.log('실제 width', window.innerWidth)
            // console.log('최대치', (window.innerWidth) * 1.2)
            // console.log('left', this.state.veryLeft)
            // console.log(`만약 왼쪽값 ${this.state.veryLeft}이 윈도우 width ${-window.innerWidth}보다 커진다면, `)
            if (this.state.veryLeft <= -(window.innerWidth * 1.2) ) {
                this.setState({veryLeft: -(window.innerWidth * 1.8) })
            }
        }
    }

    render() {
        return (
            <div className="MainTwo" id="bottom">
                <div 
                    className="bottomBanner" 
                    style={{left: this.state.veryLeft,}} 
                    onWheel={this.scrollHorizontal}
                >
                    {/* 이벤트 */}
                    <div className="container">
                        <img src={bottomImgOne} alt="" />
                        <div className="text">
                            <div className="title">
                                <span>크라운 오더</span>
                                <span>1주년 기념 이벤트</span>
                            </div>
                            <div className="content">
                                <span>크라운 오더로 주문하고</span>
                                <span>다양한 혜택을 누려보세요!</span>
                            </div>
                        </div>
                        <div className="shown">
                            <div className="logo one"></div>
                            <div className="detail">DETAIL VIEW</div>
                        </div>
                    </div>
                    {/* coffee class */}
                    <div className="container">
                        <img src={bottomImgTwo} alt="" />
                        <div className="text">
                            <div className="title two">
                                <span>Coffee</span>
                                <span>Class</span>
                            </div>
                            <div className="content">
                                <span>폴바셋 커피 클래스에 지금 참여해보세요</span>
                            </div>
                        </div>
                        <div className="shown">
                            <div className="logo two"></div>
                            <div className="detail">DETAIL VIEW</div>
                        </div>
                    </div>
                    {/* 세번째 이미지 */}
                    <div className="container imgThree">
                        <img src={bottomImgThree} alt="" />
                        <div className="text">
                            <div className="title two">
                                <span>Bean</span>
                                <span>Info</span>
                            </div>
                            <div className="content">
                                <span>폴바셋 원두 정보를 알아보세요</span>
                            </div>
                        </div>
                        <div className="shown">
                            <div className="logo three"></div>
                            <div className="detail">DETAIL VIEW</div>
                        </div>
                    </div>
                </div>
                <div className="links">
                    <div className="container">
                        <div className="mobile"></div>
                        <p className="text">Mobile<br />App</p>
                    </div>
                    <div className="container">
                        <div className="special"></div>
                        <p className="text">Special<br />Benefit</p>
                    </div>
                    <div className="container">
                        <div className="eshop"></div>
                        <p className="text">e-Shop</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainTwo