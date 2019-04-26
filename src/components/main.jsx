import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "containers/navbar";
import Things from "containers/things";
import Stats from "containers/stats";
import Data from "containers/data";
import RealTime from "containers/realTime";

const Main = () => (
  <div className="has-navbar-fixed-top">
    <Navbar />
    <main>
      <Switch>
        <Route path="/things/:thing" component={Things} />
        <Route path="/things" component={Things} />
        <Route path="/stats/:type/:observation" component={Stats} />
        <Route path="/stats" component={Stats} />
        <Route path="/data/:type/:observation/:groupBy?" component={Data} />
        <Route path="/data" component={Data} />
        <Route path="/real-time" component={RealTime} />
        <Route render={() => <Redirect to="/things" />} />
      </Switch>
    </main>
  </div>
);

export default Main;
