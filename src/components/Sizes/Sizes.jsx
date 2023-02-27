import React, {useEffect, useState} from 'react';
import styles from './Sizes.module.css'
import {checkSize} from '../../assets/checkSize';

export const Sizes = ({allSizes, sizes, color}) => {
  const [sizeActive, setSizeActive] = useState(null)

  useEffect(() => {
    if (!checkSize(sizeActive, sizes)) {
      setSizeActive(null)
    }
  }, [color])

  return (
    <div className={styles.wrapper}>
      {allSizes.map((size, index) => (

        <button
          onClick={() => setSizeActive(index)}
          disabled={!sizes.includes(index + 1)}
          className={sizeActive === index ? styles.active : styles.item} key={size.label}
        >
          {size.label}
        </button>

      ))}
    </div>
  );
};