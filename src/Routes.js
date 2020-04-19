import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from "./Home";
import Menu from "./pages/Main/Main";
import Login from "./pages/Login/Login";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;