import React, { Component } from "react";
import Nav from "../../../component/Nav/Nav";
import MenuCard from "./MenuCard/MenuCard";
import MenuFooter from "../MenuFooter/MenuFooter";
import "./MenuList.scss";

class MenuList extends Component {
  render() {
    const { products } = this.props.menu;
    if (!products) return <></>;

    return (
      <>
        <Nav />
        <div className='MenuList'>
          <div className='topImage'>
            <img />
            <div>
              <span className='title'>COFFEE</span>
              <br />
              <span>한잔의 완벽한 커피</span>
            </div>
          </div>
          <div className='category'>
            <div className='all'>
              <div>전체</div>
              <div>Coffee</div>
              <div>Latte</div>
              <div>Espresso</div>
              <div>Cold Brew</div>
              <div>Single Origin</div>
            </div>
          </div>
          <div className='menuConatinaer'>
            <div className='oneContainer'>
              {products.map((item, index) => {
                return (
                  <MenuCard
                    key={index}
                    korName={item.name_kor}
                    engName={item.name_eng}
                    img={item.image}
                    isNew={item.is_new}
                    isBest={item.is_best}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <MenuFooter />
      </>
    );
  }
}

export default MenuList;
