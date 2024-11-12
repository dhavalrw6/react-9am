import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "./features/post/postSlice";

function App() {
  const [post, setPost] = useState({});
  const dispatch = useDispatch();
  let handleInput = (e) => {
    let { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(post));
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
              name="discription"
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
