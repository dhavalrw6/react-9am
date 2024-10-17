import React, { useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { setUser } = useContext(UserContext);

  let hendleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={hendleSubmit}>Login</button>
    </div>
  );
}

export default Login;
