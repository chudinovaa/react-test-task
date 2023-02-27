import React from 'react';
import styles from './Header.module.css'
import {Link} from 'react-router-dom';

export const Header = ({title}) => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <span>{title}</span>
      </Link>
    </header>
  );
};