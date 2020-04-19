import React, { Component } from 'react';
import Nav from "./component/Nav/Nav";
import Main from "./pages/Main/Main";
import Footer from "./component/Footer/Footer";
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;