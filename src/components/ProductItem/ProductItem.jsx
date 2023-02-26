import React from 'react';
import styles from './ProductItem.module.css'
import {getColors} from '../../assets/getColors';
import {ColorsList} from '../ColorsList/ColorsList';

export const ProductItem = ({product}) => {
  const colors = getColors(product.colors)

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={product.colors[0].images[0]} alt=""/>
      </div>

      <div className={styles.price}>
        {product.colors[0].price} ₽
      </div>
      <ColorsList colors={colors}/>
      <span className={styles.title}>
          {product.name}
        </span><br/>
      <span className={styles.description}>
          {product.colors[0].description}
        </span>

    </div>
  );
};