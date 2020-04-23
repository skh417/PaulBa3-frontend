import React, { Component } from 'react';
import HomeNav from "./component/HomeNav/HomeNav";
import Main from "./pages/Main/Main";
import Footer from "./component/Footer/Footer";
import './Home.scss';

// let lastScroll = 0;

class Home extends Component {
  
  // scrollTo = () => {
  //   var currentY = window.pageYOffset || document.documentElement.scrollTop;
  //   if (currentY > lastScroll) {
  //     window.location.href = "#bottom";
  //     lastScroll = currentY;
  //   } else {
  //     window.location.href = "#top";
  //     lastScroll = currentY;
  //   }
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.scrollTo);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.scrollTo);
  // }

  render() {
    return (
      <div className="Home">
        <HomeNav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;