import React, { Component } from "react";
import NavWhite from "../../component/NavWhite/NavWhite";
import Footer from "../../component/Footer/Footer";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      isToggleOn: true,
    };
  }

  checkBox = (e) => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
    console.log("clicked");
  };

  render() {
    const { isToggleOn } = this.state; // 비구조화 할당

    console.log(isToggleOn);
    return (
      <>
        <NavWhite />
        <div className='Login'>
          <div className='loginArea'>
            <h2>로그인</h2>
            <div className='inputInfoContainer'>
              <div className='inputInfo'>
                <div className='inputIdPw'>
                  <input type='text' placeholder='아이디' />
                  <input type='password' placeholder='비밀번호' />
                </div>
                <a className='loginBtn'>로그인</a>
              </div>
              <div className='saveAndFindInfo'>
                <div className='saveId'>
                  <input
                    type='checkbox'
                    id='saveId'
                    className={isToggleOn ? "uncheckedSaveId" : "checkedSaveId"}
                    onClick={this.checkBox}
                  />
                  <label for='saveId'>아이디 저장</label>
                </div>
                <div className='idPwBtn'>
                  <a>아이디 찾기</a>
                  <a>비밀번호 찾기</a>
                </div>
              </div>
            </div>
            <div className='loginFooter'>
              <div>
                <span>아직 Paul Bassett Society 회원이 아니신가요?</span> <br />
                지금 가입하시고 Exclusive Benefits으로 돌려받으세요
              </div>
              <a>회원가입</a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
