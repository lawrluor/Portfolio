import React from 'react';
import { Row } from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <Row style={{height: "7rem" }}>
        {/*
        <Col xs="12">
          <Link to="/">Home</Link>
          <Link to="/music">Music</Link>
          <Link to="/products">Products?</Link>
        </Col>
      */}
      </Row>
    )
  }
}

export default Header;
