import '../css/Blog.css';

import React from 'react';

import Post from './post';
import PostList from './postList';

import blogData from '../data/blogDataFormatted';

class Thoughts extends React.Component {
  render() {
    return(
      <div className="bodyContainer">
        <PostList data={blogData} />
      </div>
    )
  }
}



export default Thoughts
