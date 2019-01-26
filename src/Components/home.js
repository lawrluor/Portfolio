import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ProductCard from './productCard';

class Home extends Component {
  render() {
    console.log("url", process.env.PUBLIC_URL + "/static/img/law_cropped.png");
    console.log("url", process.env.PUBLIC_URL);

    return(
      <div>
        <Container>
          <Row className="landing-grid">
            <Col sm="12" md="4" className="header-image">
              <img className="profileImage" alt="profile circle" src={"/static/img/law_cropped.png"}></img>
            </Col>

            <Col sm="12" md="4" className="header-words">
              <span><h4><i>greetings from</i></h4><h1><b>LAWRENCE LUO</b></h1></span>
              <p>I am a creator. I build web & mobile solutions to solve tangible problems in my communities. As I learn, I strive to empower others by sharing my knowledge. Let&#39;s create something!</p>
            </Col>
          </Row>

          <hr/>

          <Row className="product-row">
            <ProductCard desc="Performance Anxiety Mobile App" title="Poise" tools="React-Native, JavaScript, Firebase" img_src="url(/static/img/poise_icon.png) center / cover" url="https://www.facebook.com/poisemobileapp/" github="https://github.com/lawrluor/poised"/>
            <ProductCard desc="Boston Public Schools Event Mobile App" title="More Than A Mile" tools="React-Native, Javascript, Firebase" img_src="url(/static/img/more_than_a_mile.png) center / cover" url="https://play.google.com/store/apps/details?id=com.mtamredux&hl=en" github=""/>
            <ProductCard desc="Mixed Reality Drumkit for Hololens" title="DrummAR" tools="Unity, Hololens, Vuforia" img_src="url(/static/img/drummar_patterned.jpg) center / cover" url="https://devpost.com/software/drummAR" github="https://github.com/lawrluor/drummAR"/>
            <ProductCard desc="SSBM Esport Tournament Stats Web App" title="SmashStats" tools="Flask, SQL, Bootstrap" img_src="url(/static/img/smashstats_icon.png) center / cover" url="http://www.smashstats.io/" github="https://github.com/lawrluor/matchstats"/>
            <ProductCard desc="BostonHacks 2014 Info Mobile App" title="BostonHacks Info" tools="Java, Parse, Android Studio" img_src="url(/static/img/bostonhacks.webp) center / cover" url="https://play.google.com/store/apps/details?id=sean.bostonhacks&hl=en" github="https://github.com/lawrluor/BostonHacks-Android"/>
            <ProductCard desc="test description" title="Test3" tools="third product"/>
            <ProductCard desc="test description" title="Test" tools="first product"/>
            <ProductCard desc="test description" title="Test2" tools="second product"/>
            <ProductCard desc="test description" title="Test3" tools="third product"/>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home;
