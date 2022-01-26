import { useEffect, useState } from 'react';

import * as api from './api'
import './App.css';

// Import Components
import Header from './components/header/Header';
import SideCard from './components/side-cart/SideCard';
import SideSpecs from './components/side-specs/SideSpecs';
import Slider from './components/slider/Slider';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    setProducts(api.getProducts());
  }, []);


  return (
    <div className="App">
      <Header />
      <Slider products={products} />
      <SideSpecs />
      <SideCard />
    </div>
  );
}

export default App;