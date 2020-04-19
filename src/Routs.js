import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import App from "../src/App";
import Menu from "../src/pages/Main/Main";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/menu" component={Menu} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;