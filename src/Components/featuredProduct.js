import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const FeaturedProduct = ({ product }) => {
  // Style Card, background, etc. Align image
  const renderCardActions = (product) => {
    if (product.urls) {
      // multiple urls, non-standard. For React-Native app
      return (
        <div>
          <a href={product.github} rel="noopener noreferrer" target="_blank"><Button className="demoButton">Github</Button></a>
          <a href={product.urls.Android} rel="noopener noreferrer" target="_blank"><Button className="demoButton">Android</Button></a>
          <a href={product.urls.iOS} rel="noopener noreferrer" target="_blank"><Button className="demoButton">iOS</Button></a>
        </div>
      )
    } else {
      return (
        <div>
          <a href={product.github} rel="noopener noreferrer" target="_blank"><Button className="demoButton">Github</Button></a>
          <a href={product.url} rel="noopener noreferrer" target="_blank"><Button className="demoButton">Demo</Button></a>
        </div>
      )
    }
  }

  return (
    <Row className="featuredRow">
      <Col lg="auto offset-1" className="imageCol">
        <img className="featuredImage" src={product.img_src} alt={product.description} />
      </Col>

      <Col lg="4" md="8">
        <Card className="featuredCard">
          <CardBody>
            <CardTitle><h1>{product.title}</h1></CardTitle>
            <CardSubtitle><h3>{product.desc}</h3></CardSubtitle>
            <h4>{product.tools}</h4>

            <CardText>{product.text}</CardText>
            {renderCardActions(product)}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default FeaturedProduct;
