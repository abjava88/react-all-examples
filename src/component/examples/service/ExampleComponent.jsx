import React, { useState, useEffect } from "react";
import axios from "axios";

const ExampleComponent = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editedPost, setEditedPost] = useState({
    id: null,
    title: "",
    body: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleAddPost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((response) => {
        setPosts([...posts, response.data]);
        setNewPost({ title: "", body: "" });
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleEditPost = () => {
    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${editedPost.id}`,
        editedPost
      )
      .then(() => {
        const updatedPosts = posts.map((post) => {
          if (post.id === editedPost.id) {
            return editedPost;
          }
          return post;
        });
        setPosts(updatedPosts);
        setEditedPost({ id: null, title: "", body: "" });
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleDeletePost = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      <h2>Add New Post</h2>
      <input
        type="text"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        placeholder="Title"
      />
      <textarea
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        placeholder="Body"
      />
      <button onClick={handleAddPost}>Add Post</button>

      <h2>Edit Post</h2>
      <input
        type="text"
        value={editedPost.title}
        onChange={(e) =>
          setEditedPost({ ...editedPost, title: e.target.value })
        }
        placeholder="Title"
      />
      <textarea
        value={editedPost.body}
        onChange={(e) => setEditedPost({ ...editedPost, body: e.target.value })}
        placeholder="Body"
      />
      <button onClick={handleEditPost}>Edit Post</button>

      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            <button onClick={() => setEditedPost(post)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
