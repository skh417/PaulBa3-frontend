import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Menu from "./pages/Menu/Menu";
import MenuDetail from "./pages/Menu/MenuDetail/MenuDetail";
import Mypage from "./pages/Mypage/Mypage";
import Store from "./pages/Store/Store";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/menu/detail/:id" component={MenuDetail} />
          <Route exact path="/menu/:category/:id" component={Menu} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/store" component={Store} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
