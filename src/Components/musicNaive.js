import React from 'react';
import ReactPlayer from 'react-player';
import { Container, Row, Col } from 'reactstrap';

class Music extends React.Component {
  render() {
    return(
      <Container>
        <div>
          <h1>LAWRENCE LUO</h1>
          <h2>Creative Music</h2>
        </div>
        <Row>
          <Col xs="12">
            <ReactPlayer
              url='https://www.youtube.com/watch?v=3W09RlqTy8I'
              loop={true}
              volume={1}
              muted={true}
              playing={false}
              controls={true}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="12">Arrangements</Col>
          <Col xs="12">
            <iframe src="https://open.spotify.com/embed/track/6pYbloOUpvLFlNx6n273GB" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Col>

          <Col xs="12">
            <iframe src="https://open.spotify.com/embed/track/4Na4ZvgxCAElsAm65lqNeP" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Col>
        </Row>

        <Row>
          <Col xs="12">New Stuff</Col>
        </Row>
      </Container>
    )
  }
}

export default Music
