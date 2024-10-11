import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function App() {

  let [list, setList] = useState([]);

  useEffect(() => {
    fatchRecode();
  }, [])

  let fatchRecode = async () => {
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setList(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {
            list.map((item, index) => {

              if (item.userId == 1) {
                return (
                  <div className="col- my-3">
                    <div className="card" >
                      <div className="card-body">
                        <h5 className="card-title">{item.title.toUpperCase()}</h5>
                        <p className="card-text text-capitalize">{item.body}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
