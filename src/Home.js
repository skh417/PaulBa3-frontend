import React, { Component } from 'react';
import Nav from "./component/Nav/Nav";
import Main from "./pages/Main/Main";
import Footer from "./component/Footer/Footer";
import './Home.scss';

class Home extends Component {

  handleScroll = () => {
        if (window.scrollY > 0) {
          console.log("scrollY", window.scrollY)
        }
  }

  render() {
    return (
      <div className="Home" onScroll={this.handleScroll}>
        <Nav />
        <Main scroll={this.handleScroll}/>
        <Footer />
      </div>
    );
  }
}

export default Home;