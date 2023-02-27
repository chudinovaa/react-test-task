import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import styles from './ProductCard.module.css'
import {IoIosArrowBack} from 'react-icons/io';
import {useProducts} from '../../hooks/fetchProducts';
import {Loading} from '../Loading/Loading';
import {ColorsList} from '../ColorsList/ColorsList';
import {getColors} from '../../assets/getColors';
import {Sizes} from '../Sizes/Sizes';
import {CardDescription} from './CardDescriprion';

export const ProductCard = () => {
  const {id} = useParams()
  const {error, products, loading, allSizes} = useProducts(id)
  const colors = getColors(products.colors)
  const [color, setColor] = useState(0)
  const [image,setImage] = useState(0)

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <h1>error: {error}</h1>
  }

  const clickHandle = () => {
    !!image === true ? setImage(0) : setImage(1)
  }

  return (
    <div className={styles.container}>
      <Link to='/' className={styles.back}> <IoIosArrowBack size='14px'/> Назад</Link>

      <div className={styles.wrapper}>

        <div className={styles.main__picture}>
          <img
            onClick={clickHandle}
            src={products?.colors[color]?.images[image]}
            alt={products.name}
          />
        </div>

        <CardDescription setColor={setColor} colors={colors} color={color} allSizes={allSizes} products={products} />

      </div>
    </div>
  );
};