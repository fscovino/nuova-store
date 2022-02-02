import React from 'react';
import './styles.css';

import icon_close from '../../img/icon_close.svg';

function SideCart({ cart, addItem, removeItem, toggleCart }) {


  return (
      <aside className='side side-cart'>
        <div className="cart-header">
          <img className='icon-close' src={icon_close} alt="close cart button" onClick={toggleCart} />
          <h3 className='title'>Shopping Cart</h3>
        </div>
      </aside>
  );
}

export default SideCart;
