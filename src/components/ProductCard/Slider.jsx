import React, {useState} from 'react';
import styles from './ProductCard.module.css';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import {imageSlide} from '../../assets/imageSlide';

export const Slider = ( {products, color} ) => {
  const [image,setImage] = useState(0)

  return (

    <div className={styles.slider}>

      <AiOutlineDoubleLeft
        onClick={() => imageSlide(products.colors[color].images, 'left', image, setImage)}
        size='50px'
      />

      <div className={styles.main__picture}>
        <img
          src={products?.colors[color]?.images[image]}
          alt={products.name}
        />
      </div>

      <AiOutlineDoubleRight
        onClick={() => imageSlide(products.colors[color].images, 'right', image, setImage)}
        size='50px'
      />

    </div>
  );
};