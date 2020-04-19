import React, { Component } from 'react';
import Nav from "./component/Nav/Nav";
import Main from "./pages/Main/Main";
import Footer from "./component/Footer/Footer";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;