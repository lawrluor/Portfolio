import '../css/App.css';
import React from 'react';
import ReactGA from 'react-ga';

import Main from './main';
import Footer from './footer';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize Google Analytics to track pageviews
    ReactGA.initialize('UA-142139610-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
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
