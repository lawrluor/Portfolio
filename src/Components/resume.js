import React from 'react';
import { Link } from 'react-router-dom';

const resume = ({ location }) => (
  <div className="homeContainer">
    <div style={{textAlign: 'center'}}>
      <button className="demoButton btn btn-secondary">
        <Link to="/static/lawrence_luo_resume.pdf" target="_blank" download>Download Lawrence's Resume (PDF)</Link>
      </button>
    </div>
  </div>
)

export default resume;
