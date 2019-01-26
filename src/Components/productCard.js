import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  // Trouble assigning class names within Card, perhaps because of Bootstrap/React-MDL CSS override?
  render() {
    // Passed props
    const desc = this.props.desc;
    const tools = this.props.tools;
    const img_src = this.props.img_src;
    const url = this.props.url;
    const github = this.props.github;

    return(
      <Col lg="4" md="6">
        <Card shadow={0} style={{width: '17rem', height: '17rem', margin: "2rem", background: img_src }}>
          <CardTitle className="card-title">{this.props.title}</CardTitle>

          <CardText>
            <h3>{desc}</h3>
            <h4>{tools}</h4>
          </CardText>

          <CardActions>
            <a target="_blank" rel="noopener noreferrer" href={github}><Button style={{color: '#7D6F7D'}}>Github</Button></a>
            <a target="_blank" rel="noopener noreferrer" href={url}><Button style={{color: '#7D6F7D'}}>Demo</Button></a>
          </CardActions>
        </Card>
      </Col>
    )
  }
}

export default ProductCard;
