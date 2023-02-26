import React from 'react';
import {ProductsList} from '../components/ProductsList/ProductsList';
import {Header} from '../components/Header/Header';

export const ListPage = () => {
  return (
    <>
      <Header title="My Wildberries"/>
      <ProductsList/>
    </>
  );
};