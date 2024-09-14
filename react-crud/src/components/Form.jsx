import { useEffect, useState } from "react";



function Form() {

    let [student, setStudent] = useState({});
    let [list, setList] = useState([]);
    let [index, setIndex] = useState(-1);
    let [error, setError] = useState({});

    useEffect(() => {
        let oldList = JSON.parse(localStorage.getItem('studentList')) || []
        setList(oldList);
    }, [setList])

    let handleClick = (e) => {
        e.target.style.fontSize = "38px";
        e.target.style.color = "red";
    }

    let handleInput = (e) => {
        // let name = e.target.name;
        // let value = e.target.value;
        let { name, value } = e.target;
        setStudent({ ...student, [name]: value })
        // console.log(student);
    }

    let dataValidation = () => {
        let tempError = {};
        if (!student.id) tempError.id = "Id is required.";
        if (!student.name) tempError.name = "Name is required."
        if (!student.email) tempError.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(student.email)) tempError.email = "Invalid Email.";
        if (!student.password) tempError.password = "password is required";
        setError(tempError);
        return Object.keys(tempError).length == 0;
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        if (!dataValidation()) return;

        let newList;

        if (index != -1) {

            list[index] = student
            newList = [...list]
            setIndex(-1);
        } else {
            newList = [...list, student];
        }
        setList(newList);
        localStorage.setItem('studentList', JSON.stringify(newList));
        setStudent({})
    }

    let deleteData = (pos) => {
        list.splice(pos, 1);
        let newList = [...list];
        setList(newList);
        localStorage.setItem('studentList', JSON.stringify(newList));
    }

    let editData = (pos) => {
        let editStud = list[pos];
        console.log(editStud);
        setStudent(editStud);
        setIndex(pos)
    }

    // let obj = [
    //   {
    //     name: "dhava;",
    //     email: "dhaval@gmail.com"
    //   }
    // ]

    // localStorage.setItem('studentList', JSON.stringify(obj));
    return (
        <>
            <h2 style={{ textAlign: "center" }} onClick={(e) => handleClick(e)}>Student Registration</h2>
            <form method="post" onSubmit={(e) => handleSubmit(e)}>
                <table border={1} align="center">
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>
                                <input type="text" name="id" id="" value={student.id || ""} onChange={(e) => handleInput(e)} />
                                {error.id ? <span style={{ color: "red" }}>{error.id}</span> : null}
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" value={student.name ? student.name : ""} onChange={(e) => handleInput(e)} />
                                {error.name ? <span style={{ color: "red" }}>{error.name}</span> : null}
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="text" name="email" value={student.email ? student.email : ""} onChange={(e) => handleInput(e)} />
                                {error.email ? <span style={{ color: "red" }}>{error.email}</span> : null}
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password" name="password" value={student.password || ""} onChange={(e) => handleInput(e)} />
                                {error.password ? <span style={{ color: "red" }}>{error.password}</span> : null}
                            </td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <input type="radio" name="gender" value="male" checked={student.gender == "male"} onChange={(e) => handleInput(e)} id="" /> Male
                                <input type="radio" name="gender" value="female" checked={student.gender == "female"} onChange={(e) => handleInput(e)} id="" /> Female
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <select name="city" id="" value={student.city || ""} onChange={(e) => handleInput(e)} >
                                    <option value="">Select City</option>
                                    <option value="surat">Surat</option>
                                    <option value="Baroda">Baroda</option>
                                    <option value="Vapi">Vapi</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <textarea rows={3} cols={20} name="address" value={student.address || ""} onChange={(e) => handleInput(e)} id="" />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value={index != -1 ? "Edit Data" : "Add Data"} /></td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <br /> <br />

            <table border={1} align="center">
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Gender</td>
                        <td>City</td>
                        <td>Address</td>
                        <td>Action</td>
                    </tr>
                    {list.map((v, i) => {
                        return (
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>{v.password}</td>
                                <td>{v.gender}</td>
                                <td>{v.city}</td>
                                <td>{v.address}</td>
                                <td>
                                    <button onClick={() => deleteData(i)}>Delete</button>
                                    ||
                                    <button onClick={() => editData(i)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}

export default Form
