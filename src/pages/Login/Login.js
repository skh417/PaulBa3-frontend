import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {

    constructor() {
        super()

        this.state = {
            bgPosition : 0
        }
    }

    checkBox = (e) => {
        this.setState({
            bgPosition : -15
        })
    }

    render() {
        const { bgPosition } = this.state;
        console.log(bgPosition);
        return (
            <div className="Login">
                <div className="loginArea">    
                    <h2>로그인</h2>
                    <div className="inputInfoContainer">
                        <div className="inputInfo">
                            <div className="inputIdPw">
                                <input type="text" placeholder="아이디"/>
                                <input type="password" placeholder="비밀번호" />
                            </div>
                            <a className="loginBtn">로그인</a>
                        </div>
                    
                        <div className="saveAndFindInfo">
                            <div className="saveId">
                                <input type="checkbox" id="saveId" className="saveId" style={{backgroundPositionY : bgPosition + 'px'}} onClick={this.checkBox} />
                                <label for="saveId" onClick={this.checkBox}>아이디 저장</label>
                            </div>    
                            <div className="idPwBtn">
                                <a>아이디 찾기</a>
                                <a>비밀번호 찾기</a>
                            </div>
                        </div>
                    </div>
                    <div className="loginFooter">
                        <div>
                            <span>아직 Paul Bassett Society 회원이 아니신가요?</span> <br />지금 가입하시고 Exclusive Benefits으로 돌려받으세요
                        </div>
                        <a>회원가입</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;