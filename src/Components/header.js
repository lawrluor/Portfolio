import React from 'react';
import { Row, Col } from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Row className="headerContainer">
          <Col lg="1" xs="4"><a href="/">HOME</a></Col>
          <Col xs={{size: 4, offset: 0}} lg={{size: 1, offset: 9}}><a href="/music">MUSIC</a></Col>
          <Col lg="1" xs="4"><a href="/products">PRODUCTS</a></Col>
        </Row>
      </div>
    )
  }
}

export default Header;
