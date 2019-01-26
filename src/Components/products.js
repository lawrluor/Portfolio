import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

import ProductCard from './productCard';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  // Displays div based on tab id to render
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <div>
          <Cell col={12}>
            <h1>Web Products</h1>
          </Cell>

          <div className="products-grid">
            <ProductCard title="Web1" desc="first product" img={"/static/img/law_cropped.png"}/>
            <ProductCard title="Web2" desc="second product"/>
            <ProductCard title="Web3" desc="third product"/>
          </div>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div>
          <Cell col={12}>
            <h1>Mobile Products</h1>
          </Cell>

          <div className="products-grid">
            <ProductCard title="Test" desc="first product"/>
            <ProductCard title="Test2" desc="second product"/>
            <ProductCard title="Test3" desc="third product"/>
            <ProductCard title="Test" desc="first product"/>
            <ProductCard title="Test2" desc="second product"/>
            <ProductCard title="Test3" desc="third product"/>
          </div>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Web</Tab>
          <Tab>Mobile</Tab>
        </Tabs>

        <Grid>
          <div className="content">{this.toggleCategories()}</div>
        </Grid>
      </div>
    )
  }
}

export default Products;
