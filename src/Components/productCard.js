import React from 'react';
import { Col } from 'reactstrap';
import { Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';

const ProductCard = (props) => {
  const selectedProduct = (event) => {
    // passed function from Parent that updates Parent component's state
    // with original product info passed through props from Parent
    return props.onProductClick(props.product);
  };

  // Trouble assigning class names within Card, perhaps because of Bootstrap/React-MDL CSS override?
  return(
    <Col
      lg={{size: 3, offset: 0}}
      md={{size: 6}}
      style={{"justify-content": 'flex-end'}}
    >
      <Card
        shadow={0}
        style={{width: '16rem', height: '16rem', margin: "1.5rem", background: `url(/${props.product.img_src}) center / cover` }}
        onClick={selectedProduct}
      >
        <div className="card-content">
          <CardTitle>{props.product.title}</CardTitle>

          <CardText>
            <h3>{props.product.desc}</h3>
            <h4>{props.product.tools}</h4>
          </CardText>

          <CardActions>
            <a target="_blank" rel="noopener noreferrer" href={props.product.github}><Button><h4>Github</h4></Button></a>
            <a target="_blank" rel="noopener noreferrer" href={props.product.url}><Button><h4>Demo</h4></Button></a>
          </CardActions>
        </div>
      </Card>

    </Col>
  )
}

export default ProductCard;
