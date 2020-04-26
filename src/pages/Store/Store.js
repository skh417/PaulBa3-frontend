import React, { Component } from "react";
// import NameSection from "./NameSection/NameSection";
import LocationSection from "./LocationSection/LocationSection";
// import OptionSection from "./OptionSection/OptionSection";
import "./Store.scss";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  isSelected = (e) => {
    this.setState({ selected: true });
    const { id, value } = e.target;
    console.log("id", id, "value", value);
    // this.setState({
    //   [value]: true,
    // });
  };

  render() {
    return (
      <>
        <div className='Store'>
          {/* 왼쪽 검색 */}
          <div className='storeContainer'>
            <div className='storeList'>
              <p>매장 찾기</p>
            </div>
            <div className='category'>
              <ul>
                <li
                  className={`${this.state.selected === true ? "clicked" : ""}`}
                  onClick={this.isSelected}
                  id='storeName'
                  value={this.state.selected}
                >
                  매장명
                </li>
                <li
                  // className={`${this.state.selected === true ? "clicked" : ""}`}
                  // onClick={this.isSelected}
                  id='storeLocation'
                  value={this.state.selected}
                >
                  지역
                </li>
                <li
                  // className={`${this.state.selected === true ? "clicked" : ""}`}
                  // onClick={this.isSelected}
                  id='options'
                  value={this.state.selected}
                >
                  옵션 선택
                </li>
              </ul>
            </div>
            {/* 매장명 찾기 */}
            {/* <NameSection /> */}

            {/* 지역 찾기 */}
            <LocationSection />

            {/* 옵션 선택 */}
            {/* <OptionSection /> */}
          </div>

          {/* 오른쪽 맵 */}
          <div className='map'></div>
        </div>
      </>
    );
  }
}

export default Store;
