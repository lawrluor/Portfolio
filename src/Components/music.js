import React from 'react';
import ReactPlayer from 'react-player';
import { Container, Row, Col } from 'reactstrap';

import SpotifyCard from './spotifyCard';
import musicData from '../data/musicData';

// import Pdf from '../Documents/Document.pdf';
// PDF: <a href = {Pdf} target = "_blank">Download Pdf</a>

class Music extends React.Component {
  constructor(props){
    super(props);
    this.state = { arrangements: []};
  }
  // Process Data
  componentDidMount() {
    this.setState({ arrangements: musicData['arrangements']});
  }

  render() {
    return(
      <Container className="bodyContainer">
        <Row>
          <Col lg="5" xs="12">
            <span><h1><b>CREATIVE MUSIC</b></h1></span>
            <p>
              Lawrence Luo (b. 1996) is a composer, arranger, and multi-instrumentalist based in Boston, MA with over a decade of experience composing and arranging music.
              He has won NACUSA and MTAC awards for his contemporary classical compositions, and has had his arrangements for chamber ensembles, pop-fusion, and a cappella genres performed in-concert dozens of times.
              For inquiries, please email <a href="mailto:lawrluor@gmail.com">lawrluor@gmail.com</a>.
            </p>
          </Col>

          <Col lg="6 offset-1" className="d-none d-md-block">
            <ReactPlayer
              className="videoPlayer"
              url='https://www.youtube.com/watch?v=3W09RlqTy8I'
              volume={1}
              playing={false}
              controls={true}
              light={true}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Music
