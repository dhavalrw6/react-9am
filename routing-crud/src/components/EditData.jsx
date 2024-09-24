import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditData(props) {
    console.log(props.user);

    let [data, setData] = useState({});
    let [hobby, setHobby] = useState([]);
    let navigator = useNavigate();

    let handleInput = (e) => {
        let { name, value } = e.target;

        let ho = [...hobby];
        if (name == 'hobby') {
            if (e.target.checked) {
                ho.push(value);
            } else {
                let pos = ho.findIndex((v, i) => value == v);
                ho.splice(pos, 1);
            }
            console.log(ho);
        }
        setHobby(ho);
        setData({ ...data, [name]: value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/user', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(() => {
            toast.success("Data Add..");

            setTimeout(() => {
                navigator('/userRecode');
            }, 1000)

        }).catch((err) => {
            toast.error(err);
        })

    }

    return (
        <>
            <form method='post' onSubmit={handleSubmit}>
                <table align='center' border={1}>
                    <caption>
                        <h2>Add User Data</h2>
                        <Link to="/userRecode">View Recode</Link>
                    </caption>
                    <tbody>
                        <tr>
                            <td>UserName</td>
                            <td><input type="text" name="username" onChange={handleInput} /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" name="email" onChange={handleInput} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="text" name="password" onChange={handleInput} /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <input type="radio" name="gender" value='male' onChange={handleInput} /> Male
                                <input type="radio" name="gender" value='female' onChange={handleInput} /> Female
                            </td>
                        </tr>
                        <tr>
                            <td>Hobby</td>
                            <td>
                                <input type="checkbox" name="hobby" value='Dance' onChange={handleInput} /> Dance
                                <input type="checkbox" name="hobby" value='Writing' onChange={handleInput} /> Writing
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <select name="city" onChange={handleInput}>
                                    <option value="" disabled selected>--select-city--</option>
                                    <option value="surat">surat</option>
                                    <option value="pune">pune</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <textarea name="address" onChange={handleInput} ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Add Recode" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce />
        </>
    )
}

export default EditData
