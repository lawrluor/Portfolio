// import blogData from '../data/blogDataFormatted';

// Function to populate Firebase collection with JSON
// Adapted from https://medium.com/lucas-moyer/how-to-import-json-data-into-firestore-2b370486b622
populateFirebase() {
  const db = firebase.firestore();
  const posts = blogData['posts']; // Array of post objects
  posts.forEach((post) => {
    db.collection("posts").add({
      id: post.id,
      title: post.title,
      date: post.date,
      images: post.images,
      text: post.text,
      formatted_text: post.formatted_text
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  });
}
