import React, { useEffect, useState } from 'react'
import { json, Link } from 'react-router-dom'

function UserRecode() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetchRecode();
    }, [])

    let fetchRecode = () => {

        fetch("http://localhost:3000/user", {
            method: 'GET'
        }).then(async (res) => {
            let data = await res.json();
            console.log(data);
            setUsers(data);
        }).catch((err) => {
            console.log(err);
        })

    }

    return (
        <>
            <table align='center' border={1}>
                <caption>
                    <h2>User Recode</h2>
                    <Link to="/">Add Recode</Link>
                </caption>
                <thead>
                    <tr>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Gender</td>
                        <td>Hobby</td>
                        <td>City</td>
                        <td>Address</td>
                    </tr>
                </thead>

                <tbody>

                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.gender}</td>
                                <td>{user.hobby}</td>
                                <td>{user.city}</td>
                                <td>{user.address}</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </>
    )
}

export default UserRecode
