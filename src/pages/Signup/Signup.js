import React, { Component } from "react";
// import { withRouter } from "react-router-dom"
import NavWhite from "../../component/NavWhite/NavWhite";
import Footer from "../../component/Footer/Footer";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      smsAgree: true,
      mailAgree: true,
      pushAgree: true,
      agreeAll: true,
      home: false,
      workplace: true,
      user_id: "",
      password: "",
      pwCheck: "",
      name: "",
      birth_date: "",
      phone: "",
      email: "",
      address: "",
      usableId: false,
    };
  }

  inputId = (e) => {
    this.setState({
      user_id: e.target.value,
    });
  };

  inputPw = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  inputPwCheck = (e) => {
    this.setState({
      pwCheck: e.target.value,
    });
  };

  inputName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  inputBirth = (e) => {
    this.setState({
      birth_date: e.target.value,
    });
  };

  inputPhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  inputEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  inputAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  goToLogin = () => {
    this.props.history.push("/login");
  };

  clickSignup = (e) => {
    e.preventDefault();
    const {
      user_id,
      password,
      name,
      birth_date,
      phone,
      email,
      usableId,
    } = this.state;
    if (usableId === false) {
      alert("아이디 중복확인을 해주세요");
    } else if (
      !user_id ||
      !password ||
      !name ||
      !birth_date ||
      !phone ||
      !email
    ) {
      alert("필수항목을 작성해주세요");
    } else {
      fetch("http://10.58.6.197:8000/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: this.state.user_id,
          password: this.state.password,
          name: this.state.name,
          birth_date: this.state.birth_date,
          phone: this.state.phone,
          email: this.state.email,
        }),
      }).then((res) => {
        if (res.status === 400) {
          alert("다시 한 번 확인해주세요!");
        } else {
          alert("가입 완료 !");
          this.goToLogin();
        }
      });
    }
  };

  idCheck = (e) => {
    e.preventDefault();
    const { usableId } = this.state;
    fetch("http://10.58.6.197:8000/sign-up/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: this.state.user_id }),
    }).then((response) => {
      if (response.status === 200) {
        alert("사용 가능한 아이디입니다.");
        this.setState({ usableId: true });
      } else if (response.status === 409) {
        alert("이미 사용중인 아이디입니다.");
      } else {
        alert("사용 불가한 아이디입나다.");
      }
    });
  };

  checkHome = (e) => {
    this.setState({
      home: false,
      workplace: true,
    });
  };

  checkWork = (e) => {
    this.setState({
      home: true,
      workplace: false,
    });
  };

  checkSmsAgree = (e) => {
    this.setState({
      smsAgree: !this.state.smsAgree,
    });
    // console.log('ok');
  };
  checkMailAgree = (e) => {
    this.setState({
      mailAgree: !this.state.mailAgree,
    });
    // console.log('ok');
  };
  checkPushAgree = (e) => {
    this.setState({
      pushAgree: !this.state.pushAgree,
    });
    // console.log('ok');
  };
  agreeAll = (e) => {
    this.setState({
      agreeAll: !this.state.agreeAll,
    });
    {
      this.state.agreeAll
        ? this.setState({ smsAgree: false, mailAgree: false, pushAgree: false })
        : this.setState({ smsAgree: true, mailAgree: true, pushAgree: true });
    }
  };

  render = () => {
    const {
      smsAgree,
      mailAgree,
      pushAgree,
      agreeAll,
      home,
      workplace,
    } = this.state;
    return (
      <>
        <NavWhite />
        <div className='SignUp'>
          <h2>회원가입</h2>
          <ul className='currentStep'>
            <li>
              <span>01</span>
              본인 인증
            </li>
            <li>
              <span>02</span>약관 동의
            </li>
            <li>
              <span>03</span>회원 정보 입력
            </li>
            <li>
              <span>04</span>가입 완료
            </li>
          </ul>
          <div className='memberInfoTitle'>
            회원 정보 입력
            <span>
              * 표시 되어진 부분은 필수 항목으로 반드시 입력하셔야 합니다.
            </span>
          </div>
          <div className='notice'>
            Paul Bassett은 안전한 개인정보 보호를 위해 회원님의 동의 없이 제
            3자에게 정보를 제공하지 않습니다.
          </div>
          <table className='memberInfoTable'>
            <tr>
              <th scope='row'>
                아이디<span>*</span>
              </th>
              <td>
                <input
                  className='customId'
                  type='text'
                  onChange={this.inputId}
                />
                <a className='checkOverlap' onClick={this.idCheck}>
                  중복확인
                </a>
              </td>
            </tr>
            <tr>
              <th scope='row'>
                비밀번호<span>*</span>
              </th>
              <td>
                <input
                  className='customPw'
                  type='password'
                  onChange={this.inputPw}
                />
                <ul className='pwCaption'>
                  <li>영문자/숫자/특수 문자가 모두 포함되어야 합니다.</li>
                  <li>사용 가능한 특수 문자는 !@.#^* >+=_~ 입니다.</li>
                  <li>비밀번호는 최소 8자리 이상입니다.</li>
                  <li>공백은 사용하실 수 없습니다.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope='row'>
                비밀번호 확인<span>*</span>
              </th>
              <td>
                <input
                  className='checkPw'
                  type='password'
                  onChange={this.inputPwCheck}
                />
              </td>
            </tr>
            <tr>
              <th scope='row'>
                이름<span>*</span>
              </th>
              <td>
                <input
                  className='inputName'
                  type='text'
                  onChange={this.inputName}
                />
                {/* 실제 폴 바셋 사이트에서는 휴대폰 인증에서 입력한 이름이 자동으로 input value값으로 입력, readOnly */}
              </td>
            </tr>
            <tr>
              <th scope='row'>
                생년월일<span>*</span>
              </th>
              <td className='birthDay'>
                {/* fetch실습 */}
                <input
                  className='birthDay'
                  type='text'
                  onChange={this.inputBirth}
                />
                {/* <select className="year" />
                            <select className="month" />
                            <select className="day" /> */}
              </td>
            </tr>
            <tr>
              <th scope='row'>
                휴대폰<span>*</span>
              </th>
              <td className='phoneNumber'>
                <input
                  className='phoneNumber'
                  type='text'
                  onChange={this.inputPhone}
                />
                {/* <select className="selectPhone" />
                            <span className="hyphen"/>
                            <input type="text" />
                            <span className="hyphen"/>
                            <input type="text" /> */}
              </td>
            </tr>
            <tr>
              <th scope='row'>
                이메일<span>*</span>
              </th>
              <td className='eMail'>
                <input type='text' onChange={this.inputEmail} />
                {/* <span>@</span>
                            <input type="text" />
                            <select className="selectMail">
                                <option value>직접입력</option>
                                <option value="naver.com">naver.com</option>
                                <option>daum.net</option>
                                <option>nate.com</option>
                                <option>gmail.com</option>
                            </select> */}
              </td>
            </tr>
            <tr>
              <th scope='row'>주소</th>
              <td className='address'>
                <div className='addressDiv'>
                  <input
                    id='home'
                    className={home ? "home" : "home2"}
                    onClick={this.checkHome}
                    type='radio'
                  />
                  <label for='home'>자택</label>
                  <input
                    id='workplace'
                    className={workplace ? "workplace" : "workplace2"}
                    onClick={this.checkWork}
                    type='radio'
                  />
                  <label for='workplace'>회사</label>
                </div>
                {/* <input className="zipCode" type="text" />
                            <span className="hyphen" />
                            <a href="">주소찾기</a>
                            <br /> */}
                <input
                  className='addAddress'
                  type='text'
                  onChange={this.inputAddress}
                />
                {/* <br />
                            <input className ="addAddress" type="text" /> */}
                {/* fetch실습 */}
                <p>
                  2014년부터 도로명 새주소가 전면 시행되어 주소등록 및 변경 시
                  도로명 주소를 사용하게 됩니다.
                </p>
              </td>
            </tr>
          </table>
          <div className='marketingAgree'>
            <strong>
              광고/정보 수신 및 마케팅 활용에 대한 안내<span>선택</span>
            </strong>
            <ul>
              <li>
                정보 수신동의를 하시면 Paul Bassett의 새소식 및 이벤트 등 다양한
                정보를 받으실 수 있습니다.
              </li>
              <li>
                주요 공지사항 및 이벤트 당첨 안내 등은 수신 동의 여부에 관계없이
                발송됩니다.
              </li>
            </ul>
            <div className='marketingTxt'>
              회사는 고객님의 정보를 활용하여 다양한 방법 (앱푸시, 문자메시지,
              이메일) 을 통해 고객님께 온라인 주문 상태를 알리거나 꼭 필요한
              회사 혹은 제휴사의 상품, 서비스를 추천, 이벤트 홍보 및 광고 (쿠폰,
              이벤트 안내 등)를 제공하고 설문조사(서비스 품질 향상을 위한 고객
              만족도 조사)를 수행합니다. 회사는 해당 업무를 수행하기 위하여
              수탁사를 활용할 수 있고, 이에 대해서는 개인정보처리방침을 통해
              확인이 가능합니다.
              <br />
              고객이 선택사항에 동의하지 않더라도 서비스의 가입 및 이용이
              가능하나, 동의하지 않을 경우 제공 가능한 편의사항 (각종 혜택 안내,
              폴 방한 행사, 광고 및 이벤트 , 신제품 안내 등의 서비스 안내)에
              대한 제공이 제한 됩니다.
              <br />
              <br />
              <strong>1. 활용목적</strong>
              <br />
              엠즈씨드는 회원님들에게 보다 다양한 정보를 제공하기 위해 회원 가입
              시 수집된 개인정보를 활용합니다.
              <br />
              <br />
              <strong>2. 활용항목 및 활용 관련 정보</strong>
              <br />
              개인정보가 제공되는 정보, 제공된 정보의 이용목적은 아래와
              같습니다.
              <br />
              활용항목: 이름, 휴대폰, 이메일 , 성별, 결제정보
              <br />
              활용정보: 신규 서비스(제품)개발 및 특화, 이벤트 등 광고성
              정보전달, 인구 통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속
              빈도 파악 또는 회원의 서비스 이용에 대한 통계
              <br />
              회원님들 중 이 개인정보의 마케팅 활용동의에 동의하신 회원님들의
              정보만을 활용하며, 제공된 정보는 명시된 이용목적을 벗어나 이용되지
              않습니다. 개인정보 보호법에 의거 회원님의 정보는 안전하게
              관리되며, 개인정보의 유출 등 사고가 일어나지 않도록 더욱 철저한
              보안이 이루어지도록 노력하고 있습니다.
              <br />
              <br />
              <strong>3. 활용 기간</strong>
              <br />
              설정 >광고/ 정보 수신 및 마케팅적 활용 동의 에서 마케팅 동의
              여부를 변경할 수 있습니다.
              <br />
              마케팅 활용동의를 통해 이미 제공된 회원정보에 대해 동의 철회를
              요청하시는 경우, 동의상태 변경 또는 철회 요청일로부터 최대 7일
              이내에, 회원님의 정보는 기술적인 방법으로 마케팅 활용 대상에서
              제외 됩니다.
              <br />
              <br />
              <strong>4. 개인정보관련 의견수렴 및 불만처리에 관한 사항</strong>
              <br />
              회사는 회원님과의 원활한 의사소통을 위해 민원처리센터를 운영하고
              있으며 연락처는 다음과 같습니다.
              <br />
              · 고객 서비스 담당 부서 : 품질경영팀
              <br />
              · 문의전화 : 1899-8829 (유료)
              <br />· 팩스 : 02-3446-2220
            </div>
            <div className='marketingCheck'>
              <div className='checkAgree'>
                <input
                  id='smsAgree'
                  className={smsAgree ? "toggleOff" : "toggleOn"}
                  onClick={this.checkSmsAgree}
                  type='checkbox'
                ></input>
                <label for='smsAgree'>SMS/MMS 수신 동의</label>
                <input
                  id='mailAgree'
                  className={mailAgree ? "toggleOff" : "toggleOn"}
                  onClick={this.checkMailAgree}
                  type='checkbox'
                ></input>
                <label for='mailAgree'>E-mail 수신 동의</label>
                <input
                  id='pushAgree'
                  className={pushAgree ? "toggleOff" : "toggleOn"}
                  onClick={this.checkPushAgree}
                  type='checkbox'
                ></input>
                <label for='pushAgree'>PUSH 수신 동의</label>
              </div>
              <div className='checkAll'>
                <input
                  id='agreeAll'
                  className={agreeAll ? "agreeAll1" : "agreeAll2"}
                  onClick={this.agreeAll}
                  type='checkbox'
                ></input>
                <label for='agreeAll'>
                  광고/정보 수신 및 마케팅 활용에 전체 동의합니다.
                </label>
              </div>
            </div>
          </div>
          <div className='buttonArea'>
            <a className='cancle' href=''>
              취소
            </a>
            <a className='join' onClick={this.clickSignup}>
              회원가입
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  };
}

export default Signup;
