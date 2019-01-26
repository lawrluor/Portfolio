import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Main from './Components/main';

import './App.css';
import Footer from './Components/footer';
import Header from './Components/header';

class App extends Component {
  render() {
    return(
      <div className="mainContainer">
        <Container>
          <Header/>

          <Main/>

          <Footer/>
        </Container>
      </div>
    )
  }
}

export default App;
