import React from 'react';

// location is implicit prop passed by Switch and Route in main.js
// Use image from https://youtu.be/KbycKXUtrVk?t=14 as background?
const page404 = ({ location }) => (
  <div className="homeContainer">
    <div style={{textAlign: 'center'}}>
      <h1>Where you at? No page for <code>{location.pathname}</code> exists...</h1>
    </div>
  </div>
)

export default page404;
