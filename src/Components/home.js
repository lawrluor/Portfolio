import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import ProductCard from './productCard';

class Home extends Component {
  render() {
    console.log("url", process.env.PUBLIC_URL + "/static/img/law_cropped.png");
    console.log("url", process.env.PUBLIC_URL);

    return(
      <div className="mainContainer">
        <Grid className="landing-grid">
          <Cell col={4} className="header-image">
            <img className="profileImage" alt="profile circle" src={"/static/img/law_cropped.png"}></img>
          </Cell>

          <Cell col={4} className="header-words">
            <span><h4><i>greetings from</i></h4></span><h2>LAWRENCE LUO</h2>
            <h4>Let&#39;s create something.</h4>
          </Cell>
        </Grid>

        <hr/>

        <Grid>
          <Cell col={12}>
            <div className="products-grid">
              <ProductCard title="Test" desc="first product"/>
              <ProductCard title="Test2" desc="second product"/>
              <ProductCard title="Test3" desc="third product"/>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;
