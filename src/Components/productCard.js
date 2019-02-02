import React from 'react';
import { Col } from 'reactstrap';
import { Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';

// extract props
const ProductCard = ({ title, desc, tools, img_src, url, github }) => {
  // Trouble assigning class names within Card, perhaps because of Bootstrap/React-MDL CSS override?
  return(
    <Col lg={{size: 3, offset: 0}} md={{size: 6}} style={{"justify-content": 'flex-end'}}>
      <Card shadow={0} style={{width: '16rem', height: '16rem', margin: "1.5rem", background: img_src }}>
        <div className="card-content">
          <CardTitle>{title}</CardTitle>

          <CardText>
            <h3>{desc}</h3>
            <h4>{tools}</h4>
          </CardText>

          <CardActions>
            <a target="_blank" rel="noopener noreferrer" href={github}><Button><h4>Github</h4></Button></a>
            <a target="_blank" rel="noopener noreferrer" href={url}><Button><h4>Demo</h4></Button></a>
          </CardActions>
        </div>
      </Card>

    </Col>
  )
}

export default ProductCard;
