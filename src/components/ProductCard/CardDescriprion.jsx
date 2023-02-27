import React from 'react';
import {ColorsList} from '../ColorsList/ColorsList';
import {Sizes} from '../Sizes/Sizes';
import styles from './ProductCard.module.css';

export const CardDescription = ({products, color, setColor, colors, allSizes}) => {

  return (
    <div>

      <h1>{products.name}</h1>

      Цвета:
      <ColorsList
        colors={colors}
        setColor={setColor}
        colorActive={color}
      />

      Таблица размеров:
      <Sizes sizes={products.colors[color].sizes} allSizes={allSizes} color={color}/>
      {products.colors[color].description}

      <br/>

      <button
        className={styles.btn}
        onClick={() => alert('Здесь должен быть snackbar, но пока так.\nТовар успешно добавлен в корзину\nМожно принимать на работу!')}
      >
        Добавить в корзину
      </button>

    </div>
  );
};