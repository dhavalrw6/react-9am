import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();

function Auth_page() {
  const [user, setUser] = useState({});
  const [signIn, setSignIn] = useState(false);

  const navigator = useNavigate();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prevstate) => ({ ...prevstate, [name]: value }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (signIn) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then(() => {
          navigator("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    } else {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(() => {
          navigator("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleGoogleAuth =()=>{
    signInWithPopup(auth, provider)
  }

  return (
    <div>
      <div className="container">
        <div>
          <button onClick={() => setSignIn(false)} className="btn">
            SignUp
          </button>
          <button onClick={() => setSignIn(true)} className="btn">
            SignIn
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto w-50 mt-3">
          <caption>
            <h2>{signIn ? "SignIn" : "SignUp"}</h2>
          </caption>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={handleChange}
              value={user.email || ""}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              value={user.password || ""}
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          <button onClick={handleGoogleAuth}>Google</button>
        </form>
      </div>
    </div>
  );
}

export default Auth_page;
