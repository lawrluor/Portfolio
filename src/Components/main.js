import React from 'react';
import { Switch, Route } from 'react-router-dom'; // NavLink - allows styling links conditionally based on current Route 

import Home from './home';
import Music from './music';
import Products from './products';
import Teaching from './teaching';
import Blog from './blog';
import Resume from './resume';

// Error pages
import page404 from './page404'

// Router Embed
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/music" component={Music} />
    <Route path="/products" component={Products} />
    <Route path="/teaching" component={Teaching} />
    <Route path="/thoughts" component={Blog} />
    <Route path="/resume" component={Resume} />
    <Route component={page404} />
  </Switch>
)

// Example of not using switch
// <Route exact path="/posts:id/edit">

export default Main;
