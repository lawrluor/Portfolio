import React from 'react';
import { Row } from 'reactstrap';

import ProductCard from './productCard';

const ProductList = ({ productData, onProductClick }) => {
  const renderedList = productData.map((product) => {
    return(
      <ProductCard
        key={product.desc}
        product={product}
        onProductClick={onProductClick}
      />
    );
  });

  return(
    <Row className="product-row">
      {renderedList}
    </Row>
  );

}

export default ProductList;
