import { useState, useEffect } from 'react';
import Products from '../api/products.json';
import ProductItem from './ui/ProductItem';

const Favorites = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
  }, []);
  return (
    <div className=" container mx-auto ">
      <h3 className=" font-semibold text-sm mb-2 py-4  ">Favoriler</h3>

      <div className="  grid grid-cols-5  ">
        {products.length &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
