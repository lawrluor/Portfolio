import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div>
            <Link to="/">Home</Link>
            <Link to="/music">Looking for Music?</Link>
            <Link to="/products">Looking for Products?</Link>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Header;
