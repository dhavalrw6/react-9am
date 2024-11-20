import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigator = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigator("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div>
      <h2>Home page..</h2>
      <button onClick={handleSignout}>Signout</button>
    </div>
  );
}

export default Home;
