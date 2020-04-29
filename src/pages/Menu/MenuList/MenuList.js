import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "../../../component/Nav/Nav";
import MenuCard from "./MenuCard/MenuCard";
import MenuFooter from "../MenuFooter/MenuFooter";
import "./MenuList.scss";

const menuAll = {
  coffee: {
    title: "COFFEE",
    description: "한잔의 완벽한 커피",
    categories: [
      "전체",
      "Coffee",
      "Lattee",
      "Espresso",
      "Cold Brew",
      "Single Origin",
    ],
    banner:
      "https://www.baristapaulbassett.co.kr/images/menu/subVisual_coffee.jpg",
  },
  beverage: {
    title: "BEVERAGE",
    description: "폴 바셋의 특별한 레시피로 완성된 non coffee 음료",
    categories: [
      "전체",
      "Frappe",
      "Tea Lattee",
      "Ade Juice",
      "Tea",
      "Chocolate",
      "Yogurt",
    ],
    banner:
      "https://www.baristapaulbassett.co.kr/images/menu/subVisual_beverage.jpg",
  },
  "ice-cream": {
    title: "ICE-CREAM",
    description:
      "상하목장 유기농 우유로 만든 깊고 풍부한 유풍미의 프리미엄 소프트 아이스크림",
    categories: ["전체", "Milk Ice-Cream", "Season Ice-Cream"],
    banner:
      "https://www.baristapaulbassett.co.kr/images/menu/subVisual_iceCream.jpg",
  },
  food: {
    title: "FOOD",
    description:
      "폴 바셋 프리미엄 푸드로 때로는 달콤함을, 때로는 든든함을 느껴보세요.",
    categories: ["전체", "Bakery", "Morning foods", "Nata", "Cake Dessert"],
    banner:
      "https://www.baristapaulbassett.co.kr/images/menu/subVisual_food.jpg",
  },
  product: {
    title: "PRODUCT",
    description: "폴 바셋의 클래식 MD 상품들을 만나보세요",
    categories: [
      "전체",
      "Barista Pouch",
      "Whole bean",
      "Tumbler",
      "Mug",
      "ETC",
    ],
    banner:
      "https://www.baristapaulbassett.co.kr/images/menu/subVisual_product.jpg",
  },
};

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theOne: [],
      nowUrl: 0,
      nowCategory: "coffee",
    };
  }

  componentDidUpdate(prevProps) {
    const { category, id } = this.props.match.params;
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`http://10.58.0.33:8000/menu/${category}/${id}`)
        .then((data) => data.json())
        .then(
          (data) => this.setState({ theOne: data })
          // this.setState({ theOne: data, nowUrl: id }, () =>
          //   console.log("url", this.state.nowUrl)
          // )
        );
    }
  }

  render() {
    const { products, category } = this.props;
    const { theOne, nowUrl, nowCategory } = this.state;
    if (!products) return <></>;

    return (
      <>
        <Nav />
        <div className='MenuList'>
          <div className='topImage'>
            <img src={menuAll[category].banner} />
            <div>
              <span className='title'>{menuAll[category].title}</span>
              <br />
              <span>{menuAll[category].description}</span>
            </div>
          </div>
          <div className='category'>
            <div className='all'>
              {menuAll[category].categories.map((cat, index) => {
                return (
                  <Link to={`/menu/${category}/${index}`}>
                    <div id={index}>{cat}</div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className='menuConatinaer'>
            <div className='oneContainer'>
              {theOne.products === undefined
                ? products.map((item, index) => {
                    return (
                      <Link to={`/menu/detail?product=${item.name_eng}`}>
                        <MenuCard
                          key={index}
                          korName={item.name_kor}
                          engName={item.name_eng}
                          img={item.image}
                          category={index}
                          isNew={item.is_new}
                          isBest={item.is_best}
                        />
                      </Link>
                    );
                  })
                : theOne.products.map((item, index) => {
                    return (
                      <Link to={`/menu/detail?product=${item.name_eng}`}>
                        <MenuCard
                          key={index}
                          korName={item.name_kor}
                          engName={item.name_eng}
                          img={item.image}
                          category={index}
                          isNew={item.is_new}
                          isBest={item.is_best}
                        />
                      </Link>
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

export default withRouter(MenuList);
