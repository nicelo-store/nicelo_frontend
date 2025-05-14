import { createContext, useContext, useState, useEffect } from 'react';
import { AppwriteService } from '../services/appwrite';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    console.log('ProductContext: Attempting to fetch products...');
    try {
      setLoading(true);
      setError(null);
      
      const response = await AppwriteService.getProducts();
      console.log('ProductContext: Raw response from AppwriteService:', response);
      
      if (!response || !response.documents) {
        console.error('ProductContext: Invalid response format:', response);
        setError('Failed to fetch products: Invalid response format');
        setProducts([]);
        return;
      }
      
      console.log('ProductContext: Successfully fetched products:', response.documents);
      console.log('ProductContext: Number of products:', response.documents.length);
      console.log('ProductContext: First product sample:', 
        response.documents.length > 0 ? response.documents[0] : 'No products available');
      
      setProducts(response.documents);
    } catch (err) {
      console.error('ProductContext: Error fetching products:', err);
      setError(`Failed to fetch products: ${err.message || 'Unknown error'}`);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (productData) => {
    console.log('ProductContext: Adding new product:', productData);
    try {
      const newProduct = await AppwriteService.createProduct(productData);
      console.log('ProductContext: Successfully added product:', newProduct);
      await fetchProducts(); // Refresh the product list after adding
      return newProduct;
    } catch (err) {
      console.error('ProductContext: Error adding product:', err);
      throw err;
    }
  };

  useEffect(() => {
    console.log('ProductContext: Initial load - fetching products');
    fetchProducts();
  }, []);

  const contextValue = {
    products,
    loading,
    error,
    addProduct,
    fetchProducts,
    refreshProducts: fetchProducts // Alias for clarity when explicitly refreshing
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);