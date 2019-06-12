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
      <Container>
        <div>
          <h1>CREATIVE MUSIC</h1>
          <p> Lawrence Luo (b. 1996) is a composer, arranger, and multi-instrumentalist based in Boston, MA with over a decade of experience composing and arranging music. He has won NACUSA and MTAC awards for his contemporary classical compositions, and has had his arrangements for string ensembles, pop-fusion, and a cappella genres performed in-concert dozens of times.

          For inquiries, please email <a href="mailto:lawrluor@gmail.com">lawrluor@gmail.com</a>.</p>
        </div>

        <Row>
          <Col xs="12">
            <ReactPlayer
              url='https://www.youtube.com/watch?v=3W09RlqTy8I'
              volume={1}
              muted={true}
              playing={false}
              controls={true}
            />
          </Col>
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
