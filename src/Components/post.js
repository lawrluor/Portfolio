import React from 'react';

const post = (props) => {
  return(
    <div>
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default post;
