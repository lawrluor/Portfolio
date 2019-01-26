import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <Row className="footerContainer social-links">
        <Col xs="6">
          <h6>Built with React, Jan 2019</h6>
        </Col>

        <Col xs="3">
          <h6>luolawrence1@gmail.com</h6>
        </Col>

        <Col xs="1">
          <a href="https://linkedin.com/in/lawrenceluo8" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
        </Col>

        <Col xs="1">
          <a href="https://github.com/lawrluor" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </Col>

        <Col xs="1">
          <a href="https://www.instagram.com/oodles.of.lawrences" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
        </Col>
      </Row>
    )
  }
}

export default Footer;
