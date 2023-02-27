import React from 'react'
import {Route, Routes} from 'react-router-dom';
import {ListPage} from './pages/ListPage';
import {ProductPage} from './pages/ProductPage';
import {Header} from './components/Header/Header';

export default function App() {
  return (
    <>
      <Header title="Wildberries 0.9"/>
      <Routes>
        <Route path="/" element={<ListPage/>}/>
        <Route path="/products/:id" element={<ProductPage/>}/>
      </Routes>
    </>
  )
}
