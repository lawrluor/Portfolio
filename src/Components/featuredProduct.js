import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const FeaturedProduct = (props) => {
  // Style Card, background, etc. Align image
  return(
    <Row className="featuredRow">
      <Col lg="3 offset-1" className="imageCol">
        <img className="featuredImage" src={props.product.img_src} alt={props.product.description} />
      </Col>

      <Col lg="4" md="8">
        <Card className="featuredCard">
          <CardBody>
            <CardTitle><h1>{props.product.title}</h1></CardTitle>
            <CardSubtitle><h3>{props.product.desc}</h3></CardSubtitle>
            <h4>{props.product.tools}</h4>

            <CardText>{props.product.text}</CardText>
            <a href={props.product.github}><Button className="demoButton">Github</Button></a>
            <a href={props.product.url}><Button className="demoButton">Demo</Button></a>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default FeaturedProduct;
