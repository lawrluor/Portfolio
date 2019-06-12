import React from 'react';

import FeaturedProductList from './featuredProductList';
import productData from '../data/productData.json';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productData: productData['products'] };
  }

  // show data from JSON array
  componentDidMount() {
    // console.log(productData);
  }

  render() {
    return(
      <FeaturedProductList productData={this.state.productData}/>
    )
  }
}

export default Products;
