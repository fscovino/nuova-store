import React, { useEffect, useState } from 'react';
import * as api from './api';

import './App.css';

// Import Components
import Header from './components/header/Header';
import SideCart from './components/side-cart/SideCart';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);


  useEffect(() => {
    setProducts(api.getProducts());

    // Recover cart value from local storage
    const storedCart = JSON.parse(localStorage.getItem("nuova-cart"));
    if (storedCart) {
      setCart(storedCart);  
    }
    
  }, []);

  
 /* Add item to cart */
  const addItem = (product) => {

    // Verify if the product is already in the cart
    let itemToIncrease = null;
    if (cart) {
       itemToIncrease = cart.find((item) => item.id === product.id); 
    }

    if (itemToIncrease) {
      const newCart = cart.map((item) => item.id === product.id ? {...item, qty: item.qty + 1}: item);
      setCart(newCart);
    } else {
      const newCart = [...cart, {...product, qty: 1}];
      setCart(newCart);
    }

    // Store in localstorage
    localStorage.setItem("nuova-cart", JSON.stringify(cart));
  }


 /* Remove item from cart */
  const removeItem = (product) => {
    const itemToDecrease = cart.find(item => item.id === product.id);

    if (itemToDecrease && itemToDecrease.qty > 1) {
      const newCart = cart.map(item => item.id === product.id ? {...item, qty: item.qty - 1} : item);
      setCart(newCart);
    } else {
      const newCart = cart.filter(item => item.id !== product.id);
      setCart(newCart);
    }

    // Store in localstorage
    localStorage.setItem("nuova-cart", JSON.stringify(cart));
  }


  /* Open Cart side window */
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  }


  return (
    <div className="App">
      <div className='app'>
        <Header cart={cart} products={products} toggleCart={toggleCart} />
        <Slider products={products} addItem={addItem} />
        {cartOpen && <SideCart cart={cart} addItem={addItem} removeItem={removeItem} toggleCart={toggleCart} />}
      </div>
      <Footer products={products} />
    </div>
  );
}

export default App;