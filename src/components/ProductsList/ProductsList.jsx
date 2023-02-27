import React from 'react';
import {useProducts} from '../../hooks/fetchProducts';
import styles from './ProductList.module.css'
import {ProductItem} from '../ProductItem/ProductItem';
import {Link} from 'react-router-dom';
import {Loading} from '../Loading/Loading';

export const ProductsList = () => {
  const {error, products, loading} = useProducts()

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <h1>error: {error}</h1>
  }

  return (
    <div className={styles.wrapper}>
      {products && products.map(product => (

        <Link to={`products/${product.id}`} key={product.id}>
          <ProductItem product={product}/>
        </Link>

      ))}
    </div>
  );
};