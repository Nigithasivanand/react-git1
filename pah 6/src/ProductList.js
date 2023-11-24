import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const ProductList = () => {
  const { categories, selectedCategory, priceRange } = useContext(ProductContext);

  // Filter products based on selected category and price range
  // You would replace this logic with your actual data and filtering mechanism

  const filteredProducts = /* Your filtering logic here */ [];

  return (
    <div>
      <h2>Product List</h2>
      <p>Selected Category: {selectedCategory || 'All'}</p>
      <p>Price Range: ${priceRange.min} - ${priceRange.max}</p>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;