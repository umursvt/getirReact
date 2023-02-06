import { useEffect, useState } from 'react';

import categoryData from '../api/categories.json';
import Category from './ui/Category';
function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className=" bg-white py-8 ">
      <div className="container mx-auto font-semibold text-sm ">
        <h3 className=" mb3">Kategoriler</h3>
        <div className=" grid grid-cols-10 ">
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
