import React, { Component } from "react";
import "./MenuCard.scss";

class MenuCard extends Component {
  render() {
    const { korName, engName, img, isNew, isBest } = this.props;
    return (
      <div className='MenuCard'>
        <div className='oneMenu'>
          <div>
            <img
              className='icon'
              src={`https://www.baristapaulbassett.co.kr${img}`}
              alt=''
            />
            <div className='text'>
              {korName}
              <span>{engName}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuCard;
