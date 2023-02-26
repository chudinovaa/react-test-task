import {useEffect, useState} from 'react';
import {getProducts} from '../services/api';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await getProducts();
      setProducts(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    void fetchProducts();
  }, [])

  return { loading, error, products}
}