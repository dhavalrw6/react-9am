import React, { useEffect, useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'

function UserRecode() {

    let [users, setUsers] = useState([]);
    let navigator = useNavigate()
    useEffect(() => {
        fetchRecode();
    }, [])

    let fetchRecode = () => {
        fetch('http://localhost:3000/user', {
            method: 'get'
        }).then((res) => {
            console.log(res);
            return res.json();
        }).then((data) => {
            setUsers(data);
        }).catch((error) => {
            console.error(error);
        })
    }
    

    let deleteData = (id) => {
        fetch(`http://localhost:3000/user/${id}`, {
            method: "DELETE"
        }).then(() => {
            console.log("Data Deleted..");
            fetchRecode();
        }).catch((err) => {
            console.log(err);
        })
    }

    let editData = (id) => {
        navigator(`/edit/${id}`);
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
                        <td>Action</td>
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
                                <td>{user.hobby.toString() || ''}</td>
                                <td>{user.city}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button onClick={() => deleteData(user.id)}>Delete</button>
                                    <button onClick={() => editData(user.id)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </>
    )
}

export default UserRecode
