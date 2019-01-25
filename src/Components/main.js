import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Music from './music';
import Products from './products';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/music" component={Music} />
    <Route path="/products" component={Products} />
  </Switch>
)

export default Main;
