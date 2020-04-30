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
          clickable: true,
        },
        {
          area_name: "경기도",
          area_code: "B",
          clickable: true,
        },
        {
          area_name: "인천광역시",
          area_code: "C",
          clickable: true,
        },
        {
          area_name: "대전광역시",
          area_code: "D",
          clickable: true,
        },
        {
          area_name: "충청남도",
          area_code: "E",
          clickable: true,
        },
        {
          area_name: "충청북도",
          area_code: "F",
          clickable: true,
        },
        {
          area_name: "부산광역시",
          area_code: "G",
          clickable: true,
        },
        {
          area_name: "대구광역시",
          area_code: "H",
          clickable: true,
        },
        {
          area_name: "울산광역시",
          area_code: "I",
          clickable: true,
        },
        {
          area_name: "경상남도",
          area_code: "J",
          clickable: true,
        },
        {
          area_name: "경상북도",
          area_code: "K",
          clickable: true,
        },
        {
          area_name: "광주광역시",
          area_code: "L",
          clickable: true,
        },
        {
          area_name: "전라남도",
          area_code: "M",
          clickable: true,
        },
        {
          area_name: "전라북도",
          area_code: "N",
          clickable: true,
        },
        {
          area_name: "강원도",
          area_code: "O",
          clickable: true,
        },
        {
          area_name: "제주도",
          area_code: "P",
          clickable: true,
        },
        {
          area_name: "세종시",
          area_code: "Q",
          clickable: true,
        },
      ],
    };
  }

  callArea = (area) => {
    fetch(`${MAP_LOCATION}/store/${area.area_code}`)
      .then((res) => res.json())
      .then((res) => this.setState({ district: res.area_info }));
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
                <li
                  className={`${list.clickable ? "clickable" : "disableClick"}`}
                  key={index}
                  id={list.area_code}
                  onClick={() => this.callArea(list)}
                >
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
