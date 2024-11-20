import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";

function Add_user() {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    getData();
  }, [setData]);

  let getData = async () => {
    try {
      let res = await getDocs(collection(db, "users"));
      console.log(res);
      let allData = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log(allData);
      setData(allData);
    } catch (error) {
      console.log(error);
    }
  };

  let handleChnage = (e) => {
    let { name, value } = e.target;
    setUser((prevstate) => ({ ...prevstate, [name]: value }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId == "") {
        await addDoc(collection(db, "users"), user);
        console.log("Data added..");
      } else {
        await updateDoc(doc(db, "users", editId), {
          email: user.email,
          password: user.password,
        });
        setEditId("");
      }
    } catch (error) {
      console.log(error);
    }
    setUser({});
    getData();
  };

  let handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  let handleEdit = (user) => {
    setUser(user);
    setEditId(user.id);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="mx-auto w-50 mt-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={handleChnage}
              value={user.email || ""}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChnage}
              value={user.password || ""}
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <table>
          <thead>
            <tr>
              <th>email</th>
              <th>password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Add_user;
