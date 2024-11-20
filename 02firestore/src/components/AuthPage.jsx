import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const navigator = useNavigate();

  let handleChnage = (e) => {
    let { name, value } = e.target;
    setUser((prevstate) => ({ ...prevstate, [name]: value }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      if (login) {
        await signInWithEmailAndPassword(auth, user.email, user.password);
      } else {
        let res = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        ).catch((err) => {
          alert(err.code);
        });
      }

      setUser({});
      navigator("/home");
    } catch (error) {
      console.log(error);
      alert(error.code);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex align-center">
          <button onClick={() => setLogin(false)}>SignUp</button>
          <button onClick={() => setLogin(true)}>SignIn</button>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto w-50 mt-3">
          <caption>
            <h2>{login ? "Login" : "SignUp"}</h2>
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
              onChange={handleChnage}
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
              onChange={handleChnage}
              value={user.password || ""}
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {login ? "Login" : "SignUp"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
