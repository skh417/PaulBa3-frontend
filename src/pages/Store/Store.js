import React, { Component } from "react";
import NavWhite from "../../component/NavWhite/NavWhite";
import NameSection from "./NameSection/NameSection";
import LocationSection from "./LocationSection/LocationSection";
import OptionSection from "./OptionSection/OptionSection";
import MapAPI from "./MapAPI/MapAPI";
import Footer from "../../component/Footer/Footer";
import "./Store.scss";

const appearValue = {
  0: <Component />,
  1: <LocationSection />,
  2: <OptionSection />,
};

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      show: false,
    };
  }

  isSelected = (e) => {
    this.setState({ selected: Number(e.target.id) });
    // this.showSection(this.state.selected);
  };

  // showSection = (num) => {
  //   console.log(appearValue[num].section);
  //   return appearValue[num].section;
  // };

  // showSection = (num) => {
  //   console.log(appearValue[num].section);
  //   return appearValue[num].section;
  // };

  render() {
    console.log(this.state.selected);
    return (
      <>
        <NavWhite />
        <div className='Store'>
          {/* 왼쪽 검색 */}
          <div className='storeContainer'>
            <div className='storeList'>
              <p>매장 찾기</p>
            </div>
            <div className='category'>
              <ul>
                <li
                  className={`${this.state.selected === 0 ? "selected" : ""}`}
                  onClick={this.isSelected}
                  id='0'
                >
                  매장명
                </li>
                <li
                  className={`${this.state.selected === 1 ? "selected" : ""}`}
                  onClick={this.isSelected}
                  id='1'
                >
                  지역
                </li>
                <li
                  className={`${this.state.selected === 2 ? "selected" : ""}`}
                  onClick={this.isSelected}
                  id='2'
                >
                  옵션 선택
                </li>
              </ul>
            </div>
            {/* 하단 보여줄 값*/}
            {/* {appearValue[this.state.selected]} */}
            {/* {appearValue[0].value} */}

            {/* 매장명 찾기 */}
            {/* <NameSection /> */}

            {/* 지역 찾기 */}
            {/* <LocationSection /> */}

            {/* 옵션 선택 */}
            {/* <OptionSection /> */}
          </div>

          <MapAPI />
        </div>
        <Footer />
      </>
    );
  }
}

export default Store;
