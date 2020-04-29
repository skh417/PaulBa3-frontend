import React, { Component } from 'react';
import "./MenuDetailTwo.scss"
import MenuDetailOne from '../MenuDetailOne/MenuDetailOne';

class MenuDetailTwo extends Component {
    render(){
        const { coffee } = this.props
        return(
            <div className='bestMenu'>
            <h2>BEST MENU</h2>
            <div className='bestImgContainer'>
              <div className='best'>
                <img
                  src={`https://www.baristapaulbassett.co.kr${coffee.best_menus[0].image}`}
                  art=''
                />
                <div className='korName'>
                  {coffee.best_menus[0].name_kor}
                  <span className='engName'>{coffee.best_menus[0].name_eng}</span>
                </div>
              </div>
              <div className='best'>
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
              </div>
            </div>
          </div>
        )
    }
}

export default MenuDetailTwo