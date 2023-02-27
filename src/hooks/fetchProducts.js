import {useEffect, useState} from 'react';
import {getProduct, getProducts, getSizes} from '../services/api';

export const useProducts = (id) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [allSizes, setAllSizes] = useState([])

  async function fetchProducts(id = null) {
    try {
      setError("");
      setLoading(true);
      const response = id ? await getProduct(id) : await getProducts()
      setProducts(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  async function getAllSizes() {
    try {
      const response = await getSizes()
      setAllSizes(response)
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    void fetchProducts(id);
  }, [id])

  useEffect(() => {
    void getAllSizes()
  }, [])


  return {loading, error, products, allSizes}
}