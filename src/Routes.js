import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Java from "./Java/Java";
import Ios from "./Ios/Ios";
import Aquarium from "./Aquarium/Aquarium";
import Works from "./Work/Works";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history} >
                <Switch>
                    <Route path="/Java" component={Java} />
                    <Route path="/Ios" component={Ios} />
                    <Route path="/Aquarium" component={Aquarium} />
                    <Route path="/Works" component={Works} />       
                    <Route path="/" component={Home} />                               
                </Switch>
           </Router>
        )
    }
}
