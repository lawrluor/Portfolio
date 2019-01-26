import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div>
        <div id="Mission" className="is-fluid">
          <h2>MISSION</h2>
          <div className="columns bodyContentContainer">
            <div className="column is-5">
              <p>I am a creator. Software applications are my chosen tool for building practical solutions to tangible problems in my communities. As I learn, I strive to empower others to create by sharing the insights I gain.</p>

              <p>In Boston (<a href="https://www.bu.edu" target="_blank" rel="noopener noreferrer">BU CS & Psych, 2018</a>),
              I operate at the cross-section of technology and entrepreneurship as President of <a href="https://www.facebook.com/openwebbu/" target="_blank" rel="noopener noreferrer">Open Web</a>,
              Technical Director of <a href="http://www.bu.edu/spark/" target="_blank" rel="noopener noreferrer">BU Spark!</a>,
              and Project Manager at the <a href="https://www.facebook.com/BUVentureAccelerator/" target="_blank" rel="noopener noreferrer">BU Venture Accelerator</a>.
              My perspective is shaped additionally by my experiences performing a cappella with <a href="http://www.buinachord.org/" target="_blank" rel="noopener noreferrer">In Achord</a>,
              and competing in Super Smash Bros. Melee tournaments.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
