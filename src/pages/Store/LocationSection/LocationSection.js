import React, { Component } from "react";
import { MAP_LOCATION } from "../../../Config";
import "./LocationSection.scss";

class LocationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      district: [
        {
          area_name: "서울특별시",
          area_code: "A",
        },
        {
          area_name: "경기도",
          area_code: "B",
        },
        {
          area_name: "인천광역시",
          area_code: "C",
        },
        {
          area_name: "대전광역시",
          area_code: "D",
        },
        {
          area_name: "충청남도",
          area_code: "E",
        },
        {
          area_name: "충청북도",
          area_code: "F",
        },
        {
          area_name: "부산광역시",
          area_code: "G",
        },
        {
          area_name: "대구광역시",
          area_code: "H",
        },
        {
          area_name: "울산광역시",
          area_code: "I",
        },
        {
          area_name: "경상남도",
          area_code: "J",
        },
        {
          area_name: "경상북도",
          area_code: "K",
        },
        {
          area_name: "광주광역시",
          area_code: "L",
        },
        {
          area_name: "전라남도",
          area_code: "M",
        },
        {
          area_name: "전라북도",
          area_code: "N",
        },
        {
          area_name: "강원도",
          area_code: "O",
        },
        {
          area_name: "제주도",
          area_code: "P",
        },
        {
          area_name: "세종시",
          area_code: "Q",
        },
      ],
    };
  }

  callArea = () => {
    // fetch(`${MAP_LOCATION}/store/A`)
    fetch("http://www.mocky.io/v2/5ea97d01340000980d3f0290")
      .then((res) => res.json())
      .then((res) =>
        this.setState({ district: res.area_info }, () => {
          console.log(this.state.district);
        })
      );
  };

  render() {
    const { district } = this.state;
    return (
      <div className='LocationSection'>
        <div className='subtitle'>
          <span>시/도 선택</span>
        </div>
        <div className='cityName'>
          <ul>
            {district.map((list, index) => {
              return (
                <li key={index} onClick={this.callArea}>
                  {Object.values(list.area_name)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default LocationSection;
