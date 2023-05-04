import './App.css';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer' 
import Main from './pages/Main';
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [products, setProducts] = useState([])
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState('')
  return (
    <>
    <Routes>
      <Route path='/' element={<Main products={products} setProducts={setProducts} />} />
      <Route path='/cart' element={<Cart products={products} setProducts={setProducts} isAuth={isAuth} token={token} />} />
    </Routes>
    </>
  );
}

export default App;
