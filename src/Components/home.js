import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ProductCard from './productCard';

class Home extends Component {
  render() {
    console.log("url", process.env.PUBLIC_URL + "/static/img/law_cropped.png");
    console.log("url", process.env.PUBLIC_URL);

    return(
      <div className="mainContainer">
        <Container>
          <Row className="landing-grid">
            <Col sm="4" className="header-image">
              <img className="profileImage" alt="profile circle" src={"/static/img/law_cropped.png"}></img>
            </Col>

            <Col sm="4" className="header-words">
              <span><h4><i>greetings from</i></h4><h2>LAWRENCE LUO</h2></span>
              <h4>Let&#39;s create something.</h4>
            </Col>
          </Row>

          <hr/>

          <Row>
            <ProductCard title="Test" desc="first product"/>
            <ProductCard title="Test2" desc="second product"/>
            <ProductCard title="Test3" desc="third product"/>
            <ProductCard title="Test" desc="first product"/>
            <ProductCard title="Test2" desc="second product"/>
            <ProductCard title="Test3" desc="third product"/>
            <ProductCard title="Test" desc="first product"/>
            <ProductCard title="Test2" desc="second product"/>
            <ProductCard title="Test3" desc="third product"/>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home;
