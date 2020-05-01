import React, { Component } from "react";
import {Link} from 'react-router-dom';
import NavWhite from "../../component/NavWhite/NavWhite";
import Footer from "../../component/Footer/Footer";
import {BASE_URL} from "../../Config"
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      isToggleOn: true,
      user_id: "",
      password: "",
    };
  }

  componentDidMount() {
    if (localStorage["wtw-token"]) {
      this.props.history.push("/");
    }
  }

  checkBox = (e) => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  };

  inputId = (e) => {
    this.setState({
      user_id: e.target.value,
    });
  };

  inputPw = (e) => {
    console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };

  clickLogin = () => {
    console.log(
      JSON.stringify({
        user_id: this.state.user_id,
        password: this.state.password,
      })
    );
    fetch(`${BASE_URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user_id, // 'skh', // this.state.user_id,
        password: this.state.password, // 'qwer1234@' // this.state.password
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.token) {
          console.log("로그인 성공");
          localStorage.setItem("wtw-token", response.token);
          this.props.history.push("/");
        } else {
          alert("아이디 또는 비밀번호가 다릅니다.");
        }
      })
      .catch((err) => {
        alert("로그인 실패");
        console.error(err);
      });
  };

  render() {
    const { isToggleOn } = this.state; // 비구조화 할당

    return (
      <>
        <NavWhite />
        <div className='Login'>
          <div className='loginArea'>
            <h2>로그인</h2>
            <div className='inputInfoContainer'>
              <div className='inputInfo'>
                <div className='inputIdPw'>
                  <input
                    type='text'
                    placeholder='아이디'
                    onChange={this.inputId}
                  />
                  <input
                    type='password'
                    placeholder='비밀번호'
                    onChange={this.inputPw}
                  />
                </div>
                <a className='loginBtn' onClick={this.clickLogin}>
                  로그인
                </a>
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
                  <a href='https://www.baristapaulbassett.co.kr/member/IdFind.pb'>
                    아이디 찾기
                  </a>
                  <a href='https://www.baristapaulbassett.co.kr/member/PwFind.pb'>
                    비밀번호 찾기
                  </a>
                </div>
              </div>
            </div>
            <div className='loginFooter'>
              <div>
                <span>아직 Paul Bassett Society 회원이 아니신가요?</span> <br />
                지금 가입하시고 Exclusive Benefits으로 돌려받으세요
              </div>
              <Link to='/signup'>회원가입</Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
