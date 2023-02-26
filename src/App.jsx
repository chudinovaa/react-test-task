import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {ProductsPage} from './pages/ProductsPage';
import {ProductPage} from './pages/ProductPage';

export default function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<ProductsPage/>}/>
        <Route path="products/:id" element={<ProductPage/>}/>
      </Routes>
    </div>
  )
}
