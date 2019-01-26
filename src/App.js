import React, { Component } from 'react';
import Main from './Components/main';

import './App.css';
import Footer from './Components/footer';
import Header from './Components/header';

class App extends Component {
  render() {
    return(
      <div>
        <Header/>

        <Main/>

        <Footer/>
      </div>
    )
  }
}

export default App;
