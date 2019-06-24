import React from 'react';

import Post from './post';
import PostList from './postList';
import blogData from '../data/blogData';

class Thoughts extends React.Component {
  render() {
    return(
      <div>
        <PostList data={blogData}/>
      </div>
    )
  }
}

export default Thoughts
