import React from 'react';
import styles from './ColorList.module.css'
import {translateColors} from '../../assets/translateColors';

export const ColorsList = ({colors}) => {
  return (
    <div className={styles.wrapper}>
      {colors?.map(color => (
        <div className={styles.rect} style={{background: translateColors(color)}}/>
      ))}
    </div>
  );
};