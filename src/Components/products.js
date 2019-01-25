import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

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
        <div className="products-grid">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div className="products-grid">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
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
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Products
