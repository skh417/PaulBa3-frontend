import React, { Component } from 'react';
import HomeNav from "./component/HomeNav/HomeNav";
import Main from "./pages/Main/Main";
import Footer from "./component/Footer/Footer";
import './Home.scss';

// let lastScroll = 0;

class Home extends Component {
  state = {
    navShow: 'block',
  }

  scrollTo = () => {
    var currentY = window.pageYOffset || document.documentElement.scrollTop;
    if (currentY >= 10) {
      this.setState({navShow: 'none',})
    } else {
      this.setState({navShow: 'block',})
    }

    // if (currentY > lastScroll) {
    //   window.location.href = "#bottom";
    //   lastScroll = currentY;
    // } else {
    //   window.location.href = "#top";
    //   lastScroll = currentY;
    // }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollTo);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollTo);
  }

  render() {
    return (
      <div className="Home">
        <HomeNav navShow={this.state.navShow}/>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;