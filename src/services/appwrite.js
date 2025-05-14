import { Client, Databases, ID } from 'appwrite';

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('nicelobackend2025');              // Your project ID

const databases = new Databases(client);
const databaseId = '682435d20010393ccd37';
const collectionId = 'niceloproducts';

export const AppwriteService = {
  // Create a new product
  createProduct: async (productData) => {
    try {
      return await databases.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        productData
      );
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  // Get all products
  getProducts: async () => {
    try {
      console.log('Fetching products from Appwrite...');
      console.log('Database ID:', databaseId);
      console.log('Collection ID:', collectionId);
      
      const response = await databases.listDocuments(
        databaseId,
        collectionId
      );
      
      console.log('Raw Appwrite response:', response);
      return response;
    } catch (error) {
      console.error('Error fetching products from Appwrite:', error);
      throw error;
    }
  },

  // Get single product
  getProduct: async (productId) => {
    try {
      return await databases.getDocument(
        databaseId,
        collectionId,
        productId
      );
    } catch (error) {
      console.error(`Error fetching product ${productId}:`, error);
      throw error;
    }
  },

  // Update product
  updateProduct: async (productId, productData) => {
    try {
      return await databases.updateDocument(
        databaseId,
        collectionId,
        productId,
        productData
      );
    } catch (error) {
      console.error(`Error updating product ${productId}:`, error);
      throw error;
    }
  },

  // Delete product
  deleteProduct: async (productId) => {
    try {
      return await databases.deleteDocument(
        databaseId,
        collectionId,
        productId
      );
    } catch (error) {
      console.error(`Error deleting product ${productId}:`, error);
      throw error;
    }
  }
};