import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, editPost } from "./features/post/postSlice";
import View_post from "./components/View_post";

function App() {
  const [post, setPost] = useState({});
  const dispatch = useDispatch();
  const [editId, setEditId] = useState("");

  let handleEdit = (post) => {
    setPost(post);
    setEditId(post.id);
  };

  let handleInput = (e) => {
    let { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (editId == "") {
      dispatch(createPost(post));
    } else {
      dispatch(editPost(post));
    }
    setPost({});
  };

  return (
    <>
      <div className="container">
        <form className="w-50 mx-auto mt-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={post.title || ""}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              discription
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={post.description || ""}
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <View_post handleEdit={handleEdit} />
      </div>
    </>
  );
}

export default App;
