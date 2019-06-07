import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const FeaturedProduct = (props) => {
  // Style Card, background, etc. Align image
  return(
    <div>
      <Row>
        <Col sm="6">
          <img className="featuredImage" src={props.product.img_src} alt={props.product.description} />
        </Col>

        <Col sm="6">
          <Card className="featuredCard">
            <CardBody>
              <CardTitle><h1>{props.product.title}</h1></CardTitle>
              <CardSubtitle><h2>{props.product.desc}</h2></CardSubtitle>
              <CardSubtitle><h3>{props.product.tools}</h3></CardSubtitle>

              <CardText>Consider having a lot of text here that describes each product, and you can update this in your data</CardText>
              <Button className="demoButton"><a href={props.product.github}>Github</a></Button>
              <Button className="demoButton"><a href={props.product.url}>Demo</a></Button>
            </CardBody>
          </Card>
        </Col>
      </Row>




    </div>
  );
}

export default FeaturedProduct;
