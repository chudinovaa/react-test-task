import React from 'react';
import styles from './Header.module.css'

export const Header = ({title}) => {
  return (
    <header className={styles.header}>
      <span>{title}</span>
    </header>
  );
};