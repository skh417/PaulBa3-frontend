import React, { Component } from "react";
import { withRouter,Link } from "react-router-dom";
import NavWhite from "../../../component/NavWhite/NavWhite";
import MenuDetailOne from "./MenuDetailOne/MenuDetailOne";
import MenuDetailTwo from "./MenuDetailTwo/MenuDetailTwo";
import MenuDetailThree from "./MenuDetailThree/MenuDetailThree";
import MenuFooter from "../MenuFooter/MenuFooter";
import Footer from "../../../component/Footer/Footer";
import { MENU_DETAIL, BASE_URL } from "../../../Config";
import "./MenuDetail.scss";

class MenuDetail extends Component {
  constructor(){
    console.log("부모 constructor")
    super();
    this.state = {
      coffee: null,
    };
  } 


  componentDidMount() {
    const { id } = this.props.match.params;
    console.log("부모 componentDidMount");

    fetch(`${BASE_URL}/menu/detail/${id}`)
      .then((data) => data.json())
      .then((data) => this.setState({ coffee: data }))
      .catch((err) => {
        console.error(err);
      });
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { coffee } = this.state;
    // console.log("props: ", this.props)
    console.log("부모 render")
    return (
      <>
        <NavWhite />
        <div className='MenuDetail'>
          {coffee ? (
            <>
              <MenuDetailOne coffee={coffee} />
              <MenuDetailTwo coffee={coffee} />
              <MenuDetailThree coffee={coffee}/>
            </>
          ) : (
            <h3>해당 제품이 없습니다.😘</h3>
          )}
          <div className='btnContainer'>
            <Link onClick={this.goBack}>LIST</Link>
          </div>
          <MenuFooter />
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(MenuDetail);
