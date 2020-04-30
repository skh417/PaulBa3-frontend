import React, { Component } from 'react';
import "./MenuDetailOne.scss"

class MenuDetailOne extends Component {

 
    render(){
        const { coffee } = this.props

        return(
            <div className='menuDetailBG'>
            <div className='menuDetail'>
              <div className='menuTitle'>
                <dl>
                  <dt>
                    <span>{coffee.menu.name_eng}</span>
                    {coffee.menu.name_kor}
                  </dt>
                  <dd>{coffee.menu.description}</dd>
                </dl>
              </div>
              <div className='menuImgContainer'>
                <img
                  src={`https://www.baristapaulbassett.co.kr${coffee.menu.image[0]}`}
                />
              </div>
              <ul className='infomation'>
                <li className={coffee.info.sort ? "" : "invisibeList" }>
                  <span>구분</span>
                  {coffee.info.sort}
                </li>
                <li className={coffee.info.allergy ? "" : "invisibeList" }>
                  <span>알레르기 유발물질</span>
                  {coffee.info.allergy}
                </li>
                <li className={coffee.info.sizes ? "" : "invisibeList" }>
                  <span>제공사이즈</span>
                  {coffee.info.sizes}
                </li>
              </ul>
              <div className={coffee.nutrients.length ? 'nutriContainer':'nutriContainerNone'}>
                <div className='nutriTitle'>
                  <span>
                    영양 정보
                    <span>1회 제공량 기준</span>
                  </span>
                  <select className={coffee.info.sizes ? "" : "invisibleSel"}>
                    <option>{coffee.info.sizes}</option>
                  </select>
                </div>
                <div className='nutriContents'>
                  <div>
                    <span className='sizeML'>
                      제공량({coffee.nutrients[0] && coffee.nutrients[0].serve_type})
                      <span>{coffee.nutrients[0] && coffee.nutrients[0].serve}</span>
                    </span>
                    <ul className='nutriDetails'>
                      <li>
                        <span className='tit'>열량(kcal)</span>
                        <span className='nums'>{coffee.nutrients[0] && Math.floor(coffee.nutrients[0].kcal)}</span>
                      </li>
                      <li>
                        <span className='tit'>단백질(g)</span>
                        <span className='nums'>{coffee.nutrients[0] && Math.floor(coffee.nutrients[0].protein)}</span>
                      </li>
                      <li>
                        <span className='tit'>당류(g)</span>
                        <span className='nums'>{coffee.nutrients[0] && Math.floor(coffee.nutrients[0].sugar)}</span>
                      </li>
                      <li>
                        <span className='tit'>나트륨(mg)</span>
                        <span className='nums'>{coffee.nutrients[0] && Math.floor(coffee.nutrients[0].sodium)}</span>
                      </li>
                      <li>
                        <span className='tit'>포화지방(g)</span>
                        <span className='nums'>{coffee.nutrients[0] && coffee.nutrients[0].fat}</span>
                      </li>
                      <li>
                        <span className='tit'>카페인(mg)</span>
                        <span className='nums'>{coffee.nutrients[0] && Math.floor(coffee.nutrients[0].caffeine)}</span>
                      </li>
                    </ul>
                    <p>
                      * 우유가 추가된 음료의 영양정보는 오리지널 우유
                      기준입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default MenuDetailOne