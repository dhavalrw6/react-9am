import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import './App.css'   
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  let [list, setList] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, [])

  let fetchProduct = async () => {
    try {
      let products = await axios.get(`http://localhost:3000/products`);
      setList(products.data);
    } catch (error) {
      console.error(error);
    }
  }

  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home products={list} />} />
          <Route path='/addproduct' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
