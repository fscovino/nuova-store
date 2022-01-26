// import axios from 'axios';


// Get the Server URL for Products
// const URL = 'https://nuova-store.herokuapp.com/products';

// Export the funcitons to connect to the server
// export const createOrder = (order) => axios.post(URL, order);
// export const getProducts = () => axios.get(URL);




// Dummy Data
import data from "./products";
export const getProducts = () => data.products;
