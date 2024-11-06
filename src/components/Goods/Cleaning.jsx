import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../App-list/list.css';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryId, setCategoryId] = useState(2); // Установлено по умолчанию на "Регуляция"

  // Функция для получения товаров
  const fetchProducts = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://fohowomsk.space/api/products/`);
      const filteredProducts = response.data.filter(product =>
        product.categories.some(cat => cat.id === category)
      );
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // Функция для получения категорий
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`https://fohowomsk.space/api/categories/`);
      const filteredCategories = response.data.filter(category => ![9, 10].includes(category.id));
      setCategories(filteredCategories);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchProducts(categoryId);
    fetchCategories();
  }, [categoryId]);

  const handleCategoryChange = (e) => {
    const selectedCategory = Number(e.target.value);
    setCategoryId(selectedCategory);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <div className="container">
      <select className='category' id="category" value={categoryId} onChange={handleCategoryChange}>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>

      <div className="container-with-products">
        {products.map(product => (
          <div className="card" key={product.id}>
            <div className="card__top">
              <Link to={`/product/${product.id}`} className="card__image">
                {product.images.length > 0 && (
                  <img src={product.images[0].img} alt={product.name} />
                )}
              </Link>
            </div>
            <div className="card__bottom">
              <Link to={`/product/${product.id}`} className="card__title">
                {product.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
