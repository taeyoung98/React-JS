import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"; // HashRouter OK
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/tv/popular" render={() => <h2>Popular</h2>} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
