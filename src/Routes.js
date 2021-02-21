import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Java from "./Java/Java";
import Cpp from "./Cpp/Cpp";
import Ios from "./Ios/Ios";
import Sql from "./Sql/Sql";
import Crypto from "./Crypto/Crypto";
import Csharp from "./Csharp/Csharp";
import Photoshop from "./Photoshop/Photoshop";
import Illustrator from "./Illustrator/Illustrator";
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
                    <Route path="/Cpp" component={Cpp} />
                    <Route path="/Crypto" component={Crypto} />
                    <Route path="/Csharp" component={Csharp} />
                    <Route path="/Sql" component={Sql} />
                    <Route path="/Ios" component={Ios} />
                    <Route path="/Photoshop" component={Photoshop} />
                    <Route path="/Illustrator" component={Illustrator} />
                    <Route path="/Aquarium" component={Aquarium} />
                    <Route path="/Works" component={Works} />       
                    <Route path="/" component={Home} />                               
                </Switch>
           </Router>
        )
    }
}
