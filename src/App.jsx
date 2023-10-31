import React from 'react'
import Product from './componant/Product.jsx';
import Navbar from './componant/Navbar.jsx'
import Restaurant from './componant/Restaurant.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <>
      <BrowserRouter>
        < Navbar />
        <Routes>
          <Route path='/product' element={<Product />} />
          <Route path='/restaurant' element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

