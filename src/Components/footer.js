import React from 'react';
import { Row, Col } from 'reactstrap';

class Footer extends React.Component {
  render() {
    return (
      <div className="footerContainer">
        <Row>
          <Col xs="12" className="social-links">
            <a href="mailto:luolawrence1@gmail.com">
              <i className="fa fa-envelope-square" aria-hidden="true" />
            </a>

            <a href="https://linkedin.com/in/lawrenceluo8" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            <a href="https://github.com/lawrluor" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            <a href="https://www.instagram.com/notesfromlaw" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Footer;
