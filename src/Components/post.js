import React from 'react';
import { Link } from 'react-router-dom';

// Add scrolling functionality via https://github.com/taion/scroll-behavior
// import ScrollBehavior from 'scroll-behavior';
// Using Link instead of <a>: <Link to={idLink}>{props.title}</Link>

const post = (props) => {
  console.log(props);
  const idLink = "#" + props.id;
  return(
    <div className="postContainer">
      <a href={idLink}><h2 className="blog-h2"><b>{props.title}</b></h2></a>
      <h3><i>{props.date}</i></h3>
      <p className="blog-p">{props.text}</p>
    </div>
  )
}

export default post;
