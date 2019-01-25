import React, { Component } from 'react';
import Main from './Components/main';
import { Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return(
      <div className="mainContainer is-fluid">
        <div>
          <Link to="/">Home</Link>
          <Link to="/music">Looking for Music?</Link>
          <Link to="/products">Looking for Products?</Link>
        </div>
        <Main/>
        <div id="Footer" className="container footerContainer is-fluid has-text-centered">
          <h5>Built with React, Jan 2019</h5>
        </div>
      </div>
    )
  }
}

export default App;
