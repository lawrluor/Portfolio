import React from 'react';

import Post from './post';

const PostList = (props) => {
  const posts = props.data.posts;

  // render a list of posts, with iteration count index as the key.
  // index can be used to automatically assign keys to posts
  // object.key should never be called explicitly, use another prop with identical value object.id
  const renderedPosts = posts.map((post, index) => {
    return(
      <Post
        key={index}
        id={post.id}
        title={post.title}
        date={post.date}
        formatted_text={post.formatted_text}
        images={post.images}
      />
    )
  });

  return(
    <div>
      {renderedPosts}
    </div>
  )
}

export default PostList;
