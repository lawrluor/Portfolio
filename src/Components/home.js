import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class Home extends React.Component {
  render() {
    return(
      <Container className="mainContainer">
        <Row className="bodyContainer">
          <Col sm="12" md="4 offset-1" className="header-image">
            <img shadow={5} className="profileImage" alt="profile circle" src={"/static/img/law_cropped.png"}></img>
          </Col>

          <Col sm={{size: 12, offset: 0}} md={{size: 4, offset: 2}} lg={{size: 4, offset: 0}}>
            <span><h4><i>greetings from</i></h4><h1><b>LAWRENCE LUO</b></h1></span>
            <p>I am a creator. I build web and mobile products to solve tangible problems in my communities. As I learn, I strive to empower others by sharing my knowledge. Let&#39;s create something!</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home;
