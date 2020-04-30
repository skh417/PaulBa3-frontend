import React, { Component } from "react";
import "./MenuDetailTwo.scss";
import MenuDetailOne from "../MenuDetailOne/MenuDetailOne";

class MenuDetailTwo extends Component {
  render() {
    const { coffee } = this.props;
    // console.log('커피데이터 -->', coffee)
    // console.log('dd -->' , coffeeArr)
    // console.log('dasf', coffee)
    console.log('자식 here : ',coffee.best_menus);

    return (
      <div className='bestMenu'>
        <h2>BEST MENU</h2>
        <div className='bestImgContainer'>
            {coffee.best_menus.map((menu, index)=>{
              return (
                <div className="best" key={index}>
                  <img src={`https://www.baristapaulbassett.co.kr${menu.image}`} alt=""/>

                  <div className='korName'>
                    {menu.name_kor}
                    <span className="engName">
                      {menu.name_eng}
                    </span>
                  </div>
                </div>
              )
            })}



          {/* {coffeeArr.map((data, index)=> {
            return (
               
              <div className='best' key={index}>
                <img src={`https://www.baristapaulbassett.co.kr${Object.values(data.best_menus.image)}`}
                alt="">
                </img>
                <div className='korName'>
                  {data.best_menus.name_kor}
                <span className='engName'>{data.best_menus.name_eng}</span>
                </div>
              </div>) 
              
          })}:<></>}} */}
          {/* <div className='best'>
            <img
              src={`https://www.baristapaulbassett.co.kr${coffee.best_menus[0].image}`}
              art=''
            />
            <div className='korName'>
              {coffee.best_menus[0].name_kor}
              <span className='engName'>{coffee.best_menus[0].name_eng}</span>
            </div>
          </div> */}
          {/* <div className='best'>
            <img
              src={`https://www.baristapaulbassett.co.kr${coffee.best_menus[1].image}`}
              art=''
            />
            <div className='korName'>
              {coffee.best_menus[1].name_kor}
              <span className='engName'>{coffee.best_menus[1].name_eng}</span>
            </div>
          </div>
          <div className='best'>
            <img
              src={`https://www.baristapaulbassett.co.kr${coffee.best_menus[2].image}`}
              art=''
            />
            <div className='korName'>
              {coffee.best_menus[2].name_kor}
              <span className='engName'>{coffee.best_menus[2].name_eng}</span>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default MenuDetailTwo;
