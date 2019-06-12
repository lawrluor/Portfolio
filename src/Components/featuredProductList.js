import React from 'react';
import { Row } from 'reactstrap';

import FeaturedProduct from './featuredProduct';

const FeaturedProductList = ({productData}) => {
  const renderedList = productData.map((product) => {
    return(
      <div className="productsContainer">
        <FeaturedProduct
          key={product.desc}
          product={product}
        />
        <hr className="divider"></hr>
      </div>
    );
  });

  return(
    <Row>
      {renderedList}
    </Row>
  );

}

export default FeaturedProductList;
