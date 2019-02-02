import './App.css';

import React from 'react';

import Main from './Components/main';
import Footer from './Components/footer';
import Header from './Components/header';

class App extends React.Component {
  render() {
    return(
      <div className="mainContainer">
        <Header/>

        <Main/>

        <Footer/>
      </div>
    )
  }
}

export default App;
