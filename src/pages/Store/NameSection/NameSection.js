import React, { Component } from "react";
import { BASE_URL } from "../../../Config";
import "./NameSection.scss";

class NameSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}/branch/detail`)
      .then((res) => res.json())
      .then((res) => this.setState({ list: res }));
  }

  searchBoxChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  goSearch = () => {
    console.log("go to search!");
  };

  render() {
    const { list, searchValue } = this.state;
    // console.log("list.branches", list.branches);
    return (
      <div
        className='NameSection'
        // className={`${
        //   !this.props.show === true
        // } ? "NameSection show" : "NameSection"`}
      >
        <div className='searchBox'>
          <input
            type='text'
            placeholder='매장명 또는 주소 입력'
            onChange={this.searchBoxChange}
            value={searchValue}
          ></input>
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
              Total
              <span className='totalCount'>
                {list.branches !== undefined ? list.branches.length : "97"}
              </span>
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
                {list.branches !== undefined
                  ? list.branches.map((branch, index) => {
                      return (
                        <>
                          <div className='sotreContainer' key={index}>
                            <div className='linkToStore'>
                              <div className='name'>{branch.shop_name}</div>
                              <div className='locationLogo'></div>
                            </div>
                            <div className='address'>{branch.address}</div>
                            <div className='contact'>
                              <span className='telLogo'></span>
                              <span>{branch.tel}</span>
                            </div>
                          </div>
                        </>
                      );
                    })
                  : console.log("없음")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NameSection;
