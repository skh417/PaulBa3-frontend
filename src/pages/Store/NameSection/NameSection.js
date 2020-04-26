import React, { Component } from "react";
import "./NameSection.scss";

class NameSection extends Component {
  render() {
    return (
      <div className='NameSection'>
        <div className='searchBox'>
          <input type='text' placeholder='매장명 또는 주소 입력'></input>
          <div>
            <img
              className='searchIcon'
              src='https://www.baristapaulbassett.co.kr/images/btn/btn_search2.png'
              alt=''
            />
          </div>
        </div>
        <div className='resultList'>
          <div className='result'>
            <div>
              Total <span className='totalCount'>97</span>
            </div>
            <div className='logos'>
              <img
                src='https://www.baristapaulbassett.co.kr/images/store/array.png'
                alt=''
                className='sort'
              />
              <img
                src='https://www.baristapaulbassett.co.kr/images/store/reset.png'
                alt=''
                className='back'
              />
            </div>
          </div>

          <div className='storeLocationContainer'>
            <div className='storeLocation'>
              <div className='left'>
                <div className='name'>NC타워 삼성점</div>
                <div className='address'>
                  서울시 강남구 테헤란로 509NC타워 1층
                </div>
                <div className='contact'>
                  <span className='telLogo'></span>
                  <span>02-2051-7474</span>
                </div>
              </div>
              <div className='locationLogo'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NameSection;
