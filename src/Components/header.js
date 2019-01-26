import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Row style={{height: "7rem" }}>
        <Col xs="12">
          <Link to="/">Home</Link>
          <Link to="/music">Music</Link>
          <Link to="/products">Products?</Link>
        </Col>
      </Row>
    )
  }
}

export default Header;
