import React from 'react';
import styles from './ColorList.module.css'
import {translateColors} from '../../assets/translateColors';

export const ColorsList = ({colors, setColor, colorActive}) => {
  return (
    <div className={styles.wrapper}>
      {colors?.map((color, index) => (

        <div
          onClick={() => setColor(index)}
          className={colorActive === index ? styles.active : styles.rect}
          style={{background: translateColors(color)}}
          key={color}
        />

      ))}
    </div>
  );
};