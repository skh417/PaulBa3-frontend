import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from "./Home";
import Menu from "./pages/Menu/Menu";
import MenuDetail from "./pages/Menu/MenuDetail";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/menu/detail" component={MenuDetail} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/menu/coffee" component={Menu} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;