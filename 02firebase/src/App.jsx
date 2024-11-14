import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, deletePost, fetchPost } from "./features/post/postSlice";

function App() {
  const [post, setPost] = useState({});
  const dispatch = useDispatch();
  const { posts, error, loading } = useSelector((state) => state.post);

  let handleInput = (e) => {
    let { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

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

      <table>
        <tr>
          <th>Title</th>
          <th>Discription</th>
        </tr>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>{post.discription}</td>
            <td>
              <button
                className="btn btn-dark"
                onClick={() => dispatch(deletePost(post.id))}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
