import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Music from './music';
import Products from './products';
import Thoughts from './thoughts';

// Router Embed
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/music" component={Music} />
    <Route path="/products" component={Products} />
    <Route path="/thoughts" component={Thoughts} />
  </Switch>
)

export default Main;
