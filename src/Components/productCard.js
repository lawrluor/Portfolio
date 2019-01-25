import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle className="card-title">Project Title</CardTitle>

        <CardText>
          Loren Ipsum Text
        </CardText>

        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>Github</Button>
          <Button colored>Github</Button>
        </CardActions>

        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    )
  }
}

export default ProductCard;
