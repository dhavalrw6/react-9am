import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(list.length / itemsPerPage);


  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem('user'));
    setList(oldList);
  }, [])

  let handleChnage = (e) => {
    let { name, value } = e.target;
    let newValue = { ...user, [name]: value };
    setUser(newValue);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    let newList = [...list, user];
    setList(newList);
    localStorage.setItem('user', JSON.stringify(newList));
    setUser({});
  }

  return (
    <>
      <form onSubmit={handleSubmit} method='post'>
        <table border={1} align='center'>
          <caption>
            <h2>Add User Data</h2>
          </caption>
          <tr>
            <td>Name</td>
            <td><input type="text" name="name" value={user.name || ''} onChange={handleChnage} /></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="text" name="email" value={user.email || ''} onChange={handleChnage} /></td>
          </tr>
          <tr>
            <td></td>
            <td><input type="submit" /></td>
          </tr>
        </table>
      </form>
      <br /> <br />
      <table border={1} align='center' width={500}>
        <caption>
          <h2>User Data</h2>
        </caption>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>

          {
            currentItems.map((val, idx) => (
              <tr>
                <td>{val.name}</td>
                <td>{val.email}</td>
              </tr>
            ))
          }

          <tr>
            <td>

              {
                currentPage > 1 ?
                  <button onClick={() => setCurrentPage(currentPage - 1)}>
                    prev
                  </button> :
                  ''
              }

              {
                [...Array(totalPage)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage == index + 1 ? 'active' : ''}
                  >
                    {index + 1}
                  </button>
                ))
              }


              {
                currentPage < totalPage ?
                  <button onClick={() => setCurrentPage(currentPage + 1)}>
                    next
                  </button> :
                  ''
              }
            </td>
          </tr>

        </tbody>
      </table>
    </>
  )
}

export default App
