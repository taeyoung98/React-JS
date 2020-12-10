import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";

export default () => (
  <Router>
    {/* Magic Here */}
    <Header />
    {/* <> */}
    <Route path="/prices" component={Prices} />
    <Route path="/exchanges" component={Exchanges} />
    <Route path="/coins" component={Coins} />
    <Redirect from="*" to="/" />
    {/* </> */}
  </Router>
);
