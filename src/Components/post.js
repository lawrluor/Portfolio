import React from 'react';
import { Link } from 'react-router-dom';

// Add scrolling functionality via https://github.com/taion/scroll-behavior
// import ScrollBehavior from 'scroll-behavior';
// Using Link instead of <a>: <Link to={idLink}>{props.title}</Link>

const post = (props) => {
  const idLink = "#" + props.id;

  // Dynamically renders a list of text objects, separating by new lines or another key
  const text_dict = props.formatted_text;

  // Concept for building JSX using iterative for loop rather than map
  // Should return list of <p> tags
  const arrayLength = Object.keys(text_dict).length;
  const jsxBuilder = () => {
    let jsx = []
    for (let i = 0; i < arrayLength; i++) {
      jsx.push(<p>test</p>);
    }
    return jsx;
  }

  // Extract keys of outer dict, an array of indices, and iterate over them
  // Returns dynamic JSX, iterating over a list of dictionary keys by index
  // Purpose is to render multiple <li> elements at once rather than each key separately
  const formatted = () => {
    // consider storing in dictionary and pushing a new key when a new special value appears
    let jsx = [];
    let special_tags = {
      "li": [],
    }
    let li_jsx = [];
    let special = "";
    let current = 0;
    let keys = Object.keys(text_dict);

    // iterate through inital loop and add each element to a list
    // when encountering special element, add to a separate list and move loop forward one
    // repeat above process
    // once encountering non-key character again, begin adding to other list and retroactively add secondary list
    for (let i = 0; i < keys.length; i++) {
      console.log("special is:", special);
      const line = text_dict[i]; // {0 : {"p": "Hello World"} }

      // Extract keys fron inner dictionary
      const tag = Object.keys(line)[0] // ["p"] extracted to "p"
      const text = Object.values(line)[0] // ["Hello World"] extracted to "Hello World"

      // once tag has moved on from special character, combine the current special array with the normal array and continue
      if (tag !== special) {
        jsx = jsx.concat(li_jsx);
        special = ""; // reset to default values
        li_jsx = []; // reset to default values
      }

      // Avoid setting/injecting HTML directly for security, so we use if-else cases
      if (tag==="p") {
        jsx.push(<p>{text}</p>);
      } else if (tag==="li") {
        // If encountering <li> on its own, and open tag with <ul> and iterate until the <li> tag ends, then close.
        special = "li";
        li_jsx.push(<li>{text}</li>);
      } else {
        jsx.push(<p>{text}</p>);
      }
    }

    return jsx;
  }
  // Map version (without index-driven for loop)
  // const formatted => {
     // Object.keys(text_dict).map((key) => {
     //   const line = text_dict[key]; // {0 : {"p": "Hello World"} }

       // Extract keys fron inner dictionary
       // const tag = Object.keys(line)[0] // ["p"] extracted to "p"
       // const text = Object.values(line)[0] // ["Hello World"] extracted to "Hello World"

       // console.log("key:", key);
       // console.log("tag: ", tag);
       // console.log("text: ", text);
     //   }
     // });
  // }

  return(
    <div className="postContainer">
      <a href={idLink}><h2 className="blog-h2"><b>{props.title}</b></h2></a>
      <h3><i>{props.date}</i></h3>
      {formatted()}
    </div>
  )
}

export default post;
