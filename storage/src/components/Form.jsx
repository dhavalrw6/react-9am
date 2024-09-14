import React, { useEffect, useState } from 'react'

function Form() {
    let [user, setUser] = useState({});
    let [list, setList] = useState([]);

    useEffect(() => {
        let oldData = JSON.parse(sessionStorage.getItem('user')) || [];
        setList(oldData);
        return () => {
            sessionStorage.clear();
        }
    }, [])

    let handleInput = (e) => {
        let { name, value } = e.target;
        let newUser = { ...user, [name]: value };
        setUser(newUser);
        console.log(newUser);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        let newList = [...list, user];
        setList(newList);
        console.log(newList);
        sessionStorage.setItem('user', JSON.stringify(newList))
    }

    return (
        <>
            <h2>Add User Data..</h2>
            <form method="post" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" id="" onChange={handleInput} placeholder='Enter name' />
                </div>
                <div>
                    <input type="text" name="email" id="" onChange={handleInput} placeholder='Enter email address.' />
                </div>
                <div>
                    <input type="submit" value="Add User" />
                </div>
            </form>

            <ul>
                {list.map((v, i) => (
                    <li key={i}>Name:- {v.name} Email:- {v.email}</li>
                ))}
            </ul>

        </>
    )
}

export default Form
