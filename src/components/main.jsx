import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <main>
    <Switch>
      <Route render={() => <Fragment>{null}</Fragment>} />
    </Switch>
  </main>
);

export default Main;
