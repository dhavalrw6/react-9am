import React from "react";
import { useState } from "react";
import { app, database } from "./firebase";
import { set, ref } from "firebase/database";

function App() {
  const [user, setUser] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    set(ref(database, "users/"+Date.now()), user);
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" name="username" id="" onChange={handleChange} />
        <input type="text" name="password" id="" onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
