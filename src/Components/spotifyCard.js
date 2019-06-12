import React from 'react';
import { Row, Col, Card } from 'reactstrap';

const SpotifyCard = (props) => {
  console.log(props);
  return(
    <Row className="spotifyCard">
      <Col xs="4">
        <a href="https://open.spotify.com/track/6pYbloOUpvLFlNx6n273GB" rel="noopener noreferrer" target="_blank"><i className="fa fa-spotify" aria-hidden="true" /></a>
      </Col>

      <Col xs="8">
        <iframe title="Spotify" src="https://open.spotify.com/embed/track/6pYbloOUpvLFlNx6n273GB" width="240" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </Col>
    </Row>
  );
}

export default SpotifyCard;
