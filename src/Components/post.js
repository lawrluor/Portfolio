import React from 'react';
import { Link } from 'react-router-dom';

// Add scrolling functionality via https://github.com/taion/scroll-behavior
// import ScrollBehavior from 'scroll-behavior';
// Using Link instead of <a>: <Link to={idLink}>{props.title}</Link>

const post = (props) => {
  const idLink = "#" + props.id;
  // const text = props.text.replace(/a/g, '\n'); // converts string, but newlines don't implicitly work

  // Dynamically renders a list of text, separating by new lines or another key
  // Later, create a dictionary with the type of formatting and the text, and dynamically create HTML.
  // Or directly generate HTML to be injected
  // Automate the creation of this dictionary by parsing through normally written text
  // Detect and Process smart-text: '...', quotations, hyphens
  // Detect and Process hyperlinks, bold/italic text, lists
  // Use text validator?

  const text_dict = props.formatted_text;

  // Extract keys of outer dict, an array of indices, and iterate over them
  const formatted = Object.keys(text_dict).map((key) => {
    const line = text_dict[key]; // {0 : {"p": "Hello World"} }

    // Extract keys fron inner dictionary
    const tag = Object.keys(line)[0] // ["p"] extracted to "p"
    const text = Object.values(line)[0] // ["Hello World"] extracted to "Hello World"

    // console.log("key:", key);
    // console.log("tag: ", tag);
    // console.log("text: ", text);

    // Avoid setting HTML directly, so we use if-else cases
    if (tag==="p") {
      return(<p>{text}</p>)
    } else if (tag==="li") {
      // ideally, iterate by index, and open tag with <ul> and iterate until the <li> tag ends, then close
      return(<li>{text}</li>)
    } else {
      return(<p>{text}</p>)
    }
  });

  return(
    <div className="postContainer">
      <a href={idLink}><h2 className="blog-h2"><b>{props.title}</b></h2></a>
      <h3><i>{props.date}</i></h3>
      {formatted}
    </div>
  )
}

export default post;
