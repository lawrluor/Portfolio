import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ProductList from './productList';
import FeaturedProduct from './featuredProduct';
import productData from '../productData.json';

class Home extends React.Component {
  // Extract data from JSON array
  state = {
    productData: productData['products'],
    featuredProduct: productData['products'][0]
  };

  // show data
  componentDidMount() {
    // console.log(productData);
  }

  onProductClick = (product) => {
    console.log(product, "clicked from productCard, callback from home");
    this.setState({ featuredProduct: product });
  }

  render() {
    return(
      <div>
        <Container>
          <Row className="landing-grid">
            <Col sm="12" md="4" className="header-image">
              <img shadow={5} className="profileImage" alt="profile circle" src={"/static/img/law_cropped.png"}></img>
            </Col>

            <Col sm={{size: 12, offset: 0}} md={{size: 4, offset: 2}} lg={{size: 4, offset: 0}} className="header-words">
              <span><h4><i>greetings from</i></h4><h1><b>LAWRENCE LUO</b></h1></span>
              <p>I am a creator. I build web and mobile products to solve tangible problems in my communities. As I learn, I strive to empower others by sharing my knowledge. Let&#39;s create something!</p>
            </Col>
          </Row>

          <hr/>

          <Row>
            <Col sm="12">
              <FeaturedProduct product={this.state.featuredProduct} />
            </Col>
          </Row>

          <ProductList productData={this.state.productData} onProductClick={this.onProductClick}/>

          <hr/>
        </Container>
      </div>
    )
  }
}

export default Home;
