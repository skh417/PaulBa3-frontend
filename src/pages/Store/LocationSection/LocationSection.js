import React, { Component } from "react";
import "./LocationSection.scss";

class LocationSection extends Component {
  render() {
    return (
      <div className='LocationSection'>
        <div className='subtitle'>
          <span>시/도 선택</span>
        </div>
        <div className='cityName'>
          <ul>
            <li>서울특별시</li>
            <li>경기도</li>
            <li>인천광역시</li>
            <li>대전광역시</li>
            <li>충청남도</li>
            <li>충청북도</li>
            <li>부산광역시</li>
            <li>대구광역시</li>
            <li>울산광역시</li>
            <li>경상남도</li>
            <li>경상북도</li>
            <li>광주광역시</li>
            <li>전라남도</li>
            <li>전라북도</li>
            <li>강원도</li>
            <li>제주도</li>
            <li>세종시</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LocationSection;
