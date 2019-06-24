import React from 'react';

import Post from './post';

const PostList = (props) => {
  const posts = props.data.posts;
  const renderedPosts = posts.map((post) => {
    console.log(post);
    return(
      <Post
        key={post.title}
        title={post.title}
        date={post.date}
        text={post.text}
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
