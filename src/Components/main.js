import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Music from './music';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/" component={Music} />
  </Switch>
)

export default Main;
