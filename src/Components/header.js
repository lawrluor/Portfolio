import React from 'react';
import { Row, Col } from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Row className="headerContainer">
          <Col md="1" xs="1"><a href="/">HOME</a></Col>
          <Col md="1 offset-9" xs="1 offset-1"><a href="/music">MUSIC</a></Col>
          <Col md="1" xs="1"><a href="/products">PRODUCTS</a></Col>
        </Row>

        <hr className="divider"/>
      </div>
    )
  }
}

export default Header;
