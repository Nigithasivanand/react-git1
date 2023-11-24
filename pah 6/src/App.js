import React from 'react';
import { ProductProvider } from './ProductContext';
import ProductList from './ProductList';

const App = () => {
  return (
    <ProductProvider>
      <div>
        <h1>Fictional Online Store</h1>
        <ProductList />
        {/* Other components/pages related to the products and categories */}
      </div>
    </ProductProvider>
  );
};

export default App;