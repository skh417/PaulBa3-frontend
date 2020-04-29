import React, { Component } from "react";
import NavWhite from "../../component/NavWhite/NavWhite";
import Footer from "../../component/Footer/Footer";
import "./PageNotFound.scss";

class PageNotFound extends Component {
  render() {
    return (
      <>
        <NavWhite />
        <div className='PageNotFound'>
          <div className='notFoundContainer'>
            <div className='img'>
              <img
                src='https://www.baristapaulbassett.co.kr/images/common/error.png'
                alt=''
              />
            </div>
            <div className='text'>
              <div className='big'>죄송합니다. 페이지를 찾을 수 없습니다.</div>
              <div className='small'>
                주소가 잘못 입력되었거나 변경 혹은 삭제되어 요청하신 페이지를
                찾을 수 없습니다. 입력하신 주소가 정확한지 다시 한번
                확인해주세요.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default PageNotFound;
