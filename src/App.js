import { useEffect, useState } from 'react';
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


  useEffect(() => {
    setProducts(api.getProducts());
  }, [products]);

  const addItem = (product) => {
    const temp = cart.map((item) => item.id === product.id ? item.qty += 1 : product);
    console.log(temp);
    setCart(temp);
  }

  const removeItem = (product) => {
    
  }

  const showCart = () => {
    console.log('How cart');
  }


  return (
    <div className="App">
      <div className='app'>
        <Header cartCount={cart.length} products={products} showCart={showCart} />
        <Slider products={products} addItem={addItem} />
        <SideCart cart={cart} addItem={addItem} removeItem={removeItem} />
      </div>
      <Footer products={products} />
    </div>
  );
}

export default App;