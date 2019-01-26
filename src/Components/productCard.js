import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const img = {this.props.img};
    return(
      <Col lg="4" md="6">
        <Card shadow={0} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle className="card-title">{this.props.title}</CardTitle>

          <CardText>
            {this.props.desc}
          </CardText>

          <CardActions>
            <Button colored>Github</Button>
            <Button colored>Demo</Button>
            <Button colored>Other</Button>
          </CardActions>
        </Card>
      </Col>
    )
  }
}

export default ProductCard;
