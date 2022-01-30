import React from 'react';

import './styles.css';
import full_logo from '../../img/logo.svg';
import half_logo from '../../img/logo_shape.svg';
import icon_cart from '../../img/icon_cart.svg';
import icon_menu from '../../img/icon_menu.svg';

function Header({ cartCount, showCart }) {

  return (
    <header>
        <div className="container header">
          <div>
            <img className='full-logo' src={full_logo} alt="Nuova Store logo" />
            <img className='half-logo' src={half_logo} alt="Nuova Store logo" />
          </div>
          <div className='menu-cart'>
            <div className='menu-icon icon_cart' onClick={showCart}>
              <img src={icon_cart} alt="Shopphing Cart button" />
              {cartCount > 0 && <span className='cartCount'>{cartCount}</span>}
            </div>
            <div className='menu-icon icon_menu'>
              <img src={icon_menu} alt="Menu button" />
            </div>
          </div>
        </div>
    </header>
  );
}

export default Header;
