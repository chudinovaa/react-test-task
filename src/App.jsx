import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {ListPage} from './pages/ListPage';
import {ProductPage} from './pages/ProductPage';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<ListPage/>}/>
        <Route path="products/:id" element={<ProductPage/>}/>
      </Routes>
  )
}
