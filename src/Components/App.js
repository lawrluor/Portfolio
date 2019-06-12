import '../css/App.css';
import React from 'react';

import Main from './main';
import Footer from './footer';
import Header from './header';

class App extends React.Component {
  render() {
    return(
      <div className="appContainer">
        <Header/>
        <hr className="divider"/>

        <Main/>

        <hr className="divider"/>
        <Footer/>
      </div>
    )
  }
}

export default App;
