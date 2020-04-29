import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavWhite from "../../../component/NavWhite/NavWhite";
import MenuDetailOne from "./MenuDetailOne/MenuDetailOne";
import MenuDetailTwo from "./MenuDetailTwo/MenuDetailTwo";
import MenuDetailThree from "./MenuDetailThree/MenuDetailTree";
import MenuFooter from "../MenuFooter/MenuFooter";
import Footer from "../../../component/Footer/Footer";
import {MENU_DETAIL, BASE_URL} from "../../../Config";
import "./MenuDetail.scss";

class MenuDetail extends Component {
  state = {
    coffee: null,
  };
  componentDidMount() {
    const {id} = this.props.match.params;
    // console.log('id -->',this.props.match.params.id);


    fetch(`${BASE_URL}/menu/detail/${id}`)
      .then((data) => data.json())
      .then((data) => this.setState({ coffee: data }))
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    const { coffee } = this.state;
    // console.log("props: ", this.props)
    return (
      <>
        <NavWhite />
        <div className='MenuDetail'>
          {coffee ? (
            <>
              <MenuDetailOne coffee={coffee} />
              <MenuDetailTwo coffee={coffee} />
              <MenuDetailThree />
            </>
          ) : (
            <h3>해당 제품이 없습니다.😘</h3>
          )}
          <div className='btnContainer'>
            <a href=''>LIST</a>
          </div>
          <MenuFooter />
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(MenuDetail);
