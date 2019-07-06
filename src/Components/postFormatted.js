import React from 'react';
import { Link } from 'react-router-dom';

// Add scrolling functionality via https://github.com/taion/scroll-behavior
// import ScrollBehavior from 'scroll-behavior';
// Using Link instead of <a>: <Link to={idLink}>{props.title}</Link>

const post = (props) => {
  const idLink = "#" + props.id;
  // const text = props.text.replace(/a/g, '\n'); // converts string, but newlines don't implicitly work

  // dynamically renders a list of text, separating by new lines or another key
  // Later, create a dictionary with the type of formatting and the text, and dynamically create HTML.
  // Or directly generate HTML to be injected
  // Automate the creation of this dictionary by parsing through normally written text
  // Detect and Process smart-text: '...', quotations, hyphens
  // Detect and Process hyperlinks, bold/italic text, lists
  // Use text validator?

  // if (props.formatted_text != []) {
  const formatted = props.formatted_text.map((line, index) => {
    return(
      <p>{line}</p>
    )
  })

  // Avoid setting HTML directly, so we use if-else cases
  const text_dict = props.test_text;
  const test = "test"

  const test_format = Object.keys(text_dict).forEach((key, value) => {
    const line = text_dict[key];
    console.log(key, line);

    return (<p>{line}</p>)
    // if (key === "p") {
    //   return(<p>{line}</p>)
    // } else if (key === "li") {
    //   return(<li>{line}</li>)
    // } else {
    //   return(<p>{line}</p>)
    // }
  });

  return(
    <div className="postContainer">
      <a href={idLink}><h2 className="blog-h2"><b>{props.title}</b></h2></a>
      <h3><i>{props.date}</i></h3>
      {test_format}
    </div>
  )
}

export default post;
