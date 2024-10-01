import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditData(props) {
    console.log(props.user);

    let [data, setData] = useState({});
    let [hobby, setHobby] = useState([]);
    let navigator = useNavigate();
    let { id } = useParams();
    console.log(id);

    let fetchUser = () => {
        fetch(`http://localhost:3000/user/${id}`, {
            method: 'GET'
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data)
                setHobby(data.hobby);
            }).catch((err) => {
                console.error(err);
            })
    }

    useEffect(() => {
        fetchUser();
    }, [])

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
            value = ho
        }
        setHobby(ho);
        setData({ ...data, [name]: value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/user/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        }).then(() => {
            toast.info("Update Add..");
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
                        <h2>Edit User Data</h2>
                        <Link to="/userRecode">View Recode</Link>
                    </caption>
                    <tbody>
                        <tr>
                            <td>UserName</td>
                            <td><input type="text" name="username" value={data.username || ''} onChange={handleInput} /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" name="email" value={data.email || ''} onChange={handleInput} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="text" name="password" value={data.password || ''} onChange={handleInput} /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <input type="radio" name="gender" value='male' checked={data.gender == 'male' ? 'checked' : ''} onChange={handleInput} /> Male
                                <input type="radio" name="gender" value='female' checked={data.gender == 'female' ? 'checked' : ''} onChange={handleInput} /> Female
                            </td>
                        </tr>
                        <tr>
                            <td>Hobby</td>
                            <td>
                                <input type="checkbox" name="hobby" value='Dance' checked={hobby.includes('Dance') ? 'checked' : ''} onChange={handleInput} /> Dance
                                <input type="checkbox" name="hobby" value='Writing' checked={hobby.includes('Writing') ? 'checked' : ''} onChange={handleInput} /> Writing
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <select name="city" onChange={handleInput} value={data.city || ''}>
                                    <option value="" disabled selected>--select-city--</option>
                                    <option value="surat">surat</option>
                                    <option value="pune">pune</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <textarea name="address" onChange={handleInput} value={data.address || ''} >

                                </textarea>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Update Recode" /></td>
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
