import '../css/Blog.css';

import React from 'react';

import PostList from './postList';

import firebase from 'firebase';

class Blog extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      posts: []
    }

    this.ref = firebase.database().ref();
  }

  // on component mount, load data
  componentDidMount() {
    this.getData();
  }

  // async function to retrieve data from Firebase, then set state with data and 'loading' boolean
  async getData() {
    let posts = await this.getPosts();
    this.setState({
      posts: posts,
      loading: false
    });
  }

  // Grab data from collection 'posts' from Firebase.
  // Returns Promise with resolution of list of posts, to be used in getData()
  async getPosts() {
    return new Promise(resolve => {
      this.ref.child("posts").on('value', (snap) => {
        let posts = [];
        snap.forEach((child) => {
          let post = child.val();
          posts.push({
            id: post.id,
            title: post.title,
            date: post.date,
            images: post.images,
            text: post.text,
            formatted_text: post.formatted_text,
            _key: child.key,
          });
          resolve(posts);
        });
      });
    });
  }

  // Conditionally renders content based on whether or not data has been retrieved and loaded
  render() {
    if (this.state.loading) {
      return(
        <div className="bodyContainer">Loading Posts...</div>
      )
    } else {
      return(
        <div className="bodyContainer">
          <PostList data={this.state.posts} />
        </div>
      )
    }
  }
}

export default Blog;
