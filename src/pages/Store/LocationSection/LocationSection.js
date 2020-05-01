import React, { Component } from "react";
import { MAP_LOCATION, BASE_URL } from "../../../Config";
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
      city: [],
      isFirst: true,
      selectedList: [],
      showList: false,
    };
  }

  callArea = (area) => {
    fetch(`${MAP_LOCATION}/store/${area.area_code}`)
      .then((res) => res.json())
      .then((res) => this.setState({ city: res.area_info, isFirst: false }));
  };

  callList = (list) => {
    fetch(`${BASE_URL}/branch/detail/${list.area_code}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({ selectedList: res.branches, showList: true })
      );
  };

  render() {
    const { district, city, isFirst, showList, selectedList } = this.state;
    return (
      <div className='LocationSection'>
        {!showList ? (
          <>
            <div className='subtitle'>
              <span>시/도 선택</span>
            </div>
            <div className='cityName'>
              <ul>
                {isFirst
                  ? district.map((list, index) => {
                      return (
                        <li
                          className={`${
                            list.clickable ? "clickable" : "disableClick"
                          }`}
                          key={index}
                          id={list.area_code}
                          onClick={() => this.callArea(list)}
                        >
                          {list.area_name}
                        </li>
                      );
                    })
                  : city.map((list, index) => {
                      return (
                        <li
                          className={`${
                            list.clickable ? "clickable" : "disableClick"
                          }`}
                          key={index}
                          id={list.area_code}
                          onClick={() => this.callList(list)}
                        >
                          {list.area_name}
                        </li>
                      );
                    })}
              </ul>
            </div>
          </>
        ) : (
          <div className='resultList'>
            <div className='result'>
              <div>
                Total
                <span className='totalCount'>{selectedList.length}</span>
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
                  {selectedList.map((list, index) => {
                    return (
                      <>
                        <div className='sotreContainer' key={index}>
                          <div className='linkToStore'>
                            <div className='name'>{list.shop_name}</div>
                            <div className='locationLogo'></div>
                          </div>
                          <div className='address'>{list.address}</div>
                          <div className='contact'>
                            <span className='telLogo'></span>
                            <span>{list.tel}</span>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default LocationSection;
