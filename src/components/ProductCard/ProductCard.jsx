import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import styles from './ProductCard.module.css'
import {IoIosArrowBack} from 'react-icons/io';
import {useProducts} from '../../hooks/fetchProducts';
import {Loading} from '../Loading/Loading';
import {getColors} from '../../assets/getColors';
import {CardDescription} from './CardDescriprion';
import {Slider} from './Slider';

export const ProductCard = () => {
  const {id} = useParams()
  const {error, products, loading, allSizes} = useProducts(id)
  const colors = getColors(products.colors)
  const [color, setColor] = useState(0)

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <h1>error: {error}</h1>
  }


  return (
    <div className={styles.container}>
      <Link to='/' className={styles.back}> <IoIosArrowBack size='14px'/> Назад</Link>

      <div className={styles.wrapper}>

        <Slider color={color} products={products} />

        <CardDescription setColor={setColor} colors={colors} color={color} allSizes={allSizes} products={products} />

      </div>
    </div>
  );
};