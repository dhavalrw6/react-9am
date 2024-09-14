import { useEffect, useState } from "react";



function Form2() {

    let [student, setStudent] = useState({});
    let [list, setList] = useState([]);
    let [index, setIndex] = useState(-1);
    let [error, setError] = useState({});
    let [hobby, setHobby] = useState([]);
    let [search, setSearch] = useState('');
    let [symbol, setSymbol] = useState('');


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
        let newHobby = [...hobby];
        if (name == 'hobby') {
            if (e.target.checked) {
                newHobby.push(value);
            } else {
                let pos = newHobby.findIndex((v, i) => v == value);
                newHobby.splice(pos, 1);
            }

            value = newHobby

            console.log(newHobby);
        }

        setHobby(newHobby);
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

        // if (!dataValidation()) return;

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
        setHobby([])
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
        setHobby(editStud.hobby)
    }

    let handleSearch = (e) => {
        console.log(e.target.value);

        setSearch(e.target.value);
    }

    let sortBy = (type) => {
        let newlist = [];

        if (type == 'name') {
            if (symbol == '' || symbol == '^') {
                newlist = list.sort((a, b) => b.name.localeCompare(a.name));
                setSymbol('v')
            } else {
                newlist = list.sort((a, b) => a.name.localeCompare(b.name));
                setSymbol('^');
            }
        } else if (type == 'email') {
            if (symbol == '' || symbol == '^') {
                newlist = list.sort((a, b) => b.email.localeCompare(a.email))
                setSymbol('v');
            } else {
                newlist = list.sort((a, b) => a.email.localeCompare(b.email))
                setSymbol('^')
            }
        }

        setList(newlist);
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
                            <td>Hobby</td>
                            <td>
                                <input type="checkbox" name="hobby" value="dance" onChange={handleInput} checked={hobby.includes('dance') ? "checked" : ""} />dance
                                <input type="checkbox" name="hobby" value="music" onChange={handleInput} checked={hobby.includes('music') ? "checked" : ""} />music
                                <input type="checkbox" name="hobby" value="karate" onChange={handleInput} checked={hobby.includes('karate') ? "checked" : ""} />karate
                                <input type="checkbox" name="hobby" value="yoga" onChange={handleInput} checked={hobby.includes('yoga') ? "checked" : ""} />yoga
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
            <div style={{ textAlign: "center" }}>
                <input type="text" name="" id="" onChange={handleSearch} />
            </div>
            <br /><br />


            <table border={1} align="center">
                <tbody>
                    <tr>
                        <td>
                            <button onClick={() => sortBy('name')}>Name {symbol}</button>
                        </td>
                        <td>
                            <button onClick={() => sortBy('email')}>Email {symbol}</button>
                        </td>
                        <td>Hobby</td>
                        <td>Action</td>
                    </tr>
                    {
                        list.filter((val, idx) => {
                            if (search == '') {
                                return val
                            } else if (val.name.toLocaleLowerCase().match(search.toLocaleLowerCase())) {
                                return val
                            } else if (val.email.toLocaleLowerCase().match(search.toLocaleLowerCase())) {
                                return val
                            }
                        })
                            .map((v, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{v.name}</td>
                                        <td>{v.email}</td>
                                        <td>{v.hobby ? v.hobby.toString() : "No Hobby."}</td>
                                        <td>
                                            <button onClick={() => deleteData(i)}>Delete</button>
                                            ||
                                            <button onClick={() => editData(i)}>Edit</button>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Form2

