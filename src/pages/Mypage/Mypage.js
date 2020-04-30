import React, { Component } from "react";
import "./Mypage.scss";

class Mypage extends Component {
  render() {
    return (
      <div className='myPage'>
        <h2>My Society</h2>
        <div className='myPageBody'>
          <div className='myState'>
            <div className='myStateTop'>
              <div className='myGradeContainer'>
                <div>
                  <strong>심기현</strong>
                  회원님은
                </div>
                <div className='gradeArea'>
                  <strong className='grade'></strong>
                  등급 입니다.
                </div>
                <div className='notice'>
                  Pual Bassett society Card를 등록하시면
                  <br />
                  Red 등급으로 승급됩니다.
                </div>
              </div>
              <div className='myCrownArea'>
                <ul className='steps'>
                  <li>
                    <a>SOCIETY CARD 등록</a>
                  </li>
                  <li>
                    <a>회원정보 수정</a>
                  </li>
                  <li>
                    <a>현금영수증 자동 발급</a>
                  </li>
                </ul>
                <ul className='myNums'>
                  <li>My Crown</li>
                  <li>Free 1 Drink</li>
                  <li>Coupon</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='myMileage'></div>
          <div className='mycoupon'></div>
        </div>
      </div>
    );
  }
}

export default Mypage;
