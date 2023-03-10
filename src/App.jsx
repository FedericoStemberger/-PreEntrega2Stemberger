import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import ProductList from './components/ProductList';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductItem from './components/ProductItem';

function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductos(res.data);
  };

  useEffect(() => {
    getProductos();
  }, [])


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path='productos'
          element={<ProductList productos={productos} />}
        />
        <Route
          path='/productos/:id'
          element={<ProductItem productos={productos} />}
        />
        <Route
          path='*'
          element={<h2>404</h2>}
        />
      </Routes>      
      
    </div>
  )
}

export default App
