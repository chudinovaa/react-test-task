import React from 'react';
import styles from './ProductItem.module.css'
import {getColors} from '../../assets/getColors';
import {ItemDescription} from './ItemDescription';

export const ProductItem = ({product}) => {
  const colors = getColors(product.colors)

  return (
    <div className={styles.card}>

      <div className={styles.image}>
        <img src={product.colors[0].images[0]} alt={product.name}/>
      </div>

      <ItemDescription product={product} colors={colors}/>

    </div>
  );
};