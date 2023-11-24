import React, { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  useEffect(() => {
    // Fetch categories from API endpoint asynchronously
    // Simulating the API call with a setTimeout
    const fetchCategories = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await fetch('https://api.example.com/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const updateSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  const updatePriceRange = (min, max) => {
    setPriceRange({ min, max });
  };

  return (
    <ProductContext.Provider
      value={{
        categories,
        selectedCategory,
        priceRange,
        updateSelectedCategory,
        updatePriceRange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };