import React, { useEffect } from 'react';

import './styles.css';
import full_logo from '../../img/logo.svg';
import half_logo from '../../img/logo_shape.svg';
import icon_cart from '../../img/icon_cart.svg';
import icon_menu from '../../img/icon_menu.svg';
import { useState } from 'react/cjs/react.development';

function Header({ cart, toggleCart, products }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }


  useEffect(() => {
    let totalCount = 0;
    cart.forEach(item => totalCount += item.qty);
    setItemCount(totalCount);
  }, [cart]);


  return (
    <header>
        <div className="container header">
          <div>
            <img className='full-logo' src={full_logo} alt="Nuova Store logo" />
            <img className='half-logo' src={half_logo} alt="Nuova Store logo" />
          </div>
          <div className='menu-cart'>
            <div className='menu-icon icon_cart' onClick={toggleCart}>
              <img src={icon_cart} alt="Shopphing Cart button" />
              {itemCount > 0 && <span className='cartCount'>{itemCount}</span>}
            </div>
            <div className='menu-icon icon_menu'>
              <img src={icon_menu} alt="Menu button" onClick={toggleMenu}/>
            </div>

            {menuOpen && (
              <div className="menu-list">
                <ul>
                  {products.map((product, idx) => <li key={product.id} onClick={toggleMenu}><a type='button' data-bs-target='#maincarousel' data-bs-slide-to={idx} href=' '>{product.short_description}</a></li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
    </header>
  );
}

export default Header;
