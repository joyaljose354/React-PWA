// route setup with react router
import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import Landing from "../Scenes/Landing";
import ContinentDetails from '../Components/ContinentDetails';

export default function Routes()  {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/Continent" component={ContinentDetails} />
                </Switch>
            </Router>
        )
}