import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// import SpotifyCard from './spotifyCard';
import musicData from '../data/musicData';

import InstagramEmbed from 'react-instagram-embed';

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
              Lawrence Luo (b. 1996) is a composer, arranger, and multi-instrumentalist based in Boston & San Francisco with over a decade of experience composing and arranging music.
              He has won NACUSA and MTAC awards for his contemporary classical compositions, and has had his arrangements for chamber ensembles, pop-fusion, and a cappella genres performed in-concert dozens of times.
              For inquiries, please email <a href="mailto:luolawrence1@gmail.com">luolawrence1@gmail.com</a>.
            </p>

            <h3>Associated with:</h3>
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/buinachord2">The A Cappella Collective</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCUmsLPXkFTBv5TpdUuedSdw">BU In Achord</a></li>
            </ul>
          </Col>

          <Col lg="6 offset-1" className="d-none d-md-block">
            <InstagramEmbed
              url='https://www.instagram.com/p/BryLF37H3j5/'
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Music;


// Not used: For embedding youtube videos
// import ReactPlayer from 'react-player';
// <ReactPlayer
//   className="videoPlayer"
//   url='https://www.youtube.com/watch?v=3W09RlqTy8I'
//   volume={1}
//   playing={false}
//   controls={true}
//   light={true}
// />
