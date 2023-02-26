import React from 'react';
import {useProducts} from '../hooks/fetchProducts';

export const ProductsPage = () => {
  const {error, products, loading} = useProducts()
  return (
    <>
      тест
    </>
  );
};