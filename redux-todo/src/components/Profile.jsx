import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {

    const {user}  = useContext(UserContext);

    if(!user) return  <div>Not logged in</div>;


  return (
    <div>
      <h2>{user.username}</h2>
    </div>
  )
}

export default Profile
