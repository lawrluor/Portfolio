import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
  render() {
    console.log("url", process.env.PUBLIC_URL + "/static/img/law_cropped.png");
    console.log("url", process.env.PUBLIC_URL);

    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="profileImage" alt="profile circle" src={"/static/img/law_cropped.png"}></img>

            <div className="banner-text">
              <h1>Lawrence Luo</h1>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com/in/lawrenceluo8" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              <a href="https://github.com/lawrluor" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              <a href="https://www.instagram.com/oodles.of.lawrences" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-instagram-square" aria-hidden="true" />
              </a>
            </div>
          </Cell>
        </Grid>

        <div className="hero is-fullheight is-bold mainContainer">
          <div className="hero-head has-text-centered">
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <div><h4><i>GREETINGS FROM</i></h4></div>
              <div><h1 className="title"><b>LAWRENCE LUO</b></h1></div>
              <div><h2>Let&#39;s create something.</h2></div>
            </div>
          </div>
        </div>

        <div id="Mission" className="container bodyContainer is-fluid">
          <h1>MISSION</h1>
          <div className="columns bodyContentContainer">
            <div className="column is-5">
              <p>I am a creator. Software applications are my chosen tool for building practical solutions to tangible problems in my communities. As I learn, I strive to empower others to create by sharing the insights I gain.</p>
              <br></br>
              <p>In Boston (<a href="https://www.bu.edu" target="_blank" rel="noopener noreferrer">BU CS & Psych, 2018</a>),
              I operate at the cross-section of technology and entrepreneurship as President of <a href="https://www.facebook.com/openwebbu/" target="_blank" rel="noopener noreferrer">Open Web</a>,
              Technical Director of <a href="http://www.bu.edu/spark/" target="_blank" rel="noopener noreferrer">BU Spark!</a>,
              and Project Manager at the <a href="https://www.facebook.com/BUVentureAccelerator/" target="_blank" rel="noopener noreferrer">BU Venture Accelerator</a>.
              My perspective is shaped additionally by my experiences performing a cappella with <a href="http://www.buinachord.org/" target="_blank" rel="noopener noreferrer">In Achord</a>,
              and competing in Super Smash Bros. Melee tournaments.</p>
            </div>
          </div>
        </div>

        <div id="Products" className="container bodyContainer is-fluid">
          <h1>PRODUCTS</h1>
          <h4>* Collaboration</h4>
          <div className="bodyContentContainer">

          </div>

          <div className="bodyContentContainer">
            <h1 id="Garage">GARAGE</h1>

          </div>
        </div>
      </div>
    )
  }
}

export default Home;
