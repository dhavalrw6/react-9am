import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPost, handleEdit } from "../features/post/postSlice";

function View_post({ handleEdit }) {
  const { posts, error, loading } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <>
      <div className="row mt-3 justify-content-center">
        {posts.map((post) => (
          <div className="col-3 my-3">
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <button
                  onClick={() => dispatch(deletePost(post.id))}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <button onClick={() => handleEdit(post)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default View_post;
