import React, { Component } from 'react';
import "./MenuDetailThree.scss";

class MenuDetailThree extends Component {
    render(){
        return(
        <div className='espressoStyle'>
            <h2>5S FOR SWEET DESSERT STYLE ESPRESSO</h2>
            <ul>
              <li>
                <img
                  src='https://www.baristapaulbassett.co.kr/images/menu/espressoStyle01.png'
                  alt=''
                />
                <span>
                  전체 생산량의 7% 미만인 최상급 스페셜티 생두를 전세계 커피
                  산지와 농장에서 직접 선별합니다.
                </span>
              </li>
              <li>
                <img
                  src='https://www.baristapaulbassett.co.kr/images/menu/espressoStyle02.png'
                  alt=''
                />
                <span>
                  Grain-Pro방식의 폴바셋 생두는 향미보존에 적합한 온도(15~20℃),
                  습도(55~60%)가 유지되는 항온·습 창고에 보관됩니다.
                </span>
              </li>
              <li>
                <img
                  src='https://www.baristapaulbassett.co.kr/images/menu/espressoStyle03.png'
                  alt=''
                />
                <span>
                  좋은 원두가 가진 향미를 최고의 상태로 선보이기 위해 로스팅 후
                  4~8일 사이의 원두로만 에스프레소를 만듭니다.
                </span>
              </li>
              <li>
                <img
                  src='https://www.baristapaulbassett.co.kr/images/menu/espressoStyle04.png'
                  alt=''
                />
                <span>
                  최적의 크기로 분쇄된 스페셜티 커피 25g을 트리플 바스켓에 담아
                  에스프레소를 추출합니다.
                </span>
              </li>
              <li>
                <img
                  src='https://www.baristapaulbassett.co.kr/images/menu/espressoStyle05.png'
                  alt=''
                />
                <span>
                  에스프레소가 짙은 갈색에서 옅은 색의 변화까지 약 24ml의
                  에센스만 추출해 단맛, 신맛, 바디의 밸런스를 구현합니다.
                </span>
              </li>
            </ul>
        </div>
        )
    }
}

export default MenuDetailThree