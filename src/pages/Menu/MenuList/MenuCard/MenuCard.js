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

        {/* <div className="oneContainer">
                    <div>
                        <img className="icon" src={icon} />
                        <div className="text">
                            아이스 카라멜 마키아토 <span>Iced Caramel Macchiato</span>
                        </div>
                    </div>
                </div> */}
      </div>
    );
  }
}

export default MenuCard;
