import React from 'react';

// Add scrolling functionality via https://github.com/taion/scroll-behavior
// import ScrollBehavior from 'scroll-behavior';
// Using Link instead of <a>: <Link to={idLink}>{props.title}</Link>

const post = (props) => {
  let idLink = "#" + props.id;
  let text_dict = props.formatted_text;

  // Dynamically renders a list of text objects, separating by new lines or another key
  // Extract keys of outer dict, an array of indices, and iterate over them
  // Returns dynamic JSX, iterating over a list of dictionary keys by index
  // Purpose is to render multiple <li> elements at once rather than each key separately
  const formatted = () => {
    let jsx = []; // "master" variable to be built upon through iteration
    let jsxSpecial = {
      "li": []
    }
    let specialTag = "";

    // iterate through inital loop and add each element to a list
    // when encountering special element, add to a separate list and move loop forward one
    // once encountering non-special element again, begin adding to other list and retroactively add secondary list
    for (let i = 0; i < Object.keys(text_dict).length; i++) {
      let line = text_dict[i]; // {0 : {"p": "Hello World"} }
      let tag = Object.keys(line)[0] // ["p"] extracted to "p"
      let text = Object.values(line)[0] // ["Hello World"] extracted to "Hello World"

      // once tag has moved on from special character, combine the current special array with the normal array and continue
      if (tag !== specialTag) {
        if (specialTag === "li") {
          // wrap in list of <li> elements in <ul>, then concatenate to rest of jsx
          jsxSpecial[specialTag] = <ul>{jsxSpecial[specialTag]}</ul>
        }
        jsx = jsx.concat(jsxSpecial[specialTag]);
        jsxSpecial[specialTag] = []; // reset to default values
        specialTag = ""; // reset to default values
      }

      // Avoid setting/injecting HTML directly for security, so we use if-else cases
      if (tag==="p") {
        jsx.push(<p>{text}</p>);
      } else if (tag==="li") {
        // If encountering <li> on its own, and open tag with <ul> and iterate until the <li> tag ends, then close.
        specialTag = "li";
        jsxSpecial[specialTag].push(<li>{text}</li>);
      } else {
        // Let default tag be <p> tag
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
