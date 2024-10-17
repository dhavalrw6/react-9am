import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  let { user } = useContext(UserContext);
  if (!user) return <h3>Pls Login..</h3>;

  return (
    <>
      <h2>Welcome {user.username}</h2>
    </>
  );
}

export default Profile;
