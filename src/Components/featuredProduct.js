import React from 'react';

const featuredProduct = (props) => {
  // Make new card for this
  return(
    <div>
      <img className="productImage" src={props.product.img_src} alt={props.product.description} />
      Title: {props.product.title}
      Description: {props.product.desc}
      Tools : {props.product.tools}
      Github: {props.product.github}
      Demo: {props.product.url}
    </div>
  );
}

export default featuredProduct;
