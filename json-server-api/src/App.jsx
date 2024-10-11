import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Show from './components/Show.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
