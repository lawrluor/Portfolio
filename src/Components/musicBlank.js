import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class Music extends React.Component {
  render() {
    return(
      <Container className="bodyContainer">
        <div>
          <h1>LAWRENCE LUO</h1>
          <h2>Creative Music</h2>
        </div>
        <Row>
          <Col xs="12">
            Bio
          </Col>
        </Row>

        <Row>
          <Col xs="12">Arrangements</Col>
        </Row>

        <Row>
          <Col xs="12"><h2>ARRANGEMENTS</h2></Col>
          <SpotifyCard arrangement={this.state.arrangements[0]}/>
        </Row>
      </Container>
    )
  }
}

export default Music
