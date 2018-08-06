import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "containers/navbar";
import Things from "components/things";
import Stats from "components/stats";

const Main = () => (
  <div className="has-navbar-fixed-top">
    <Navbar />
    <main className="container">
      <Switch>
        <Route path="/things" component={Things} />
        <Route path="/stats" component={Stats} />
        <Route render={() => <Redirect to="/things" />} />
      </Switch>
    </main>
  </div>
);

export default Main;
