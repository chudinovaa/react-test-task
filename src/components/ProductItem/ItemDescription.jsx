import React, {useState} from 'react';
import styles from './ProductItem.module.css';
import {ColorsList} from '../ColorsList/ColorsList';

export const ItemDescription = ({product, colors}) => {
  const [color, setColor] = useState(0)

  return (
    <>

      <div className={styles.price}>
        {product.colors[0].price} ₽
      </div>

      <ColorsList colorActive={color} setColor={setColor} colors={colors}/>
      <span className={styles.title}>
          {product.name}
        </span>

      <br/>

      <span className={styles.description}>
          {product.colors[0].description}
        </span>

    </>
  );
};