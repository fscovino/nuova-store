import React, { useEffect, useState } from 'react';

// Import style and images
import './styles.css';
import icon_close from '../../img/icon_close.svg';
import icon_decrease from '../../img/icon_minus.svg';
import icon_increase from '../../img/icon_plus.svg';
import icon_cards from '../../img/icon_cards.jpg';


function SideCart({ cart, addItem, removeItem, toggleCart }) {

  const [subtotal, setSubtotal] = useState(0.00);
  const [taxes, setTaxes] = useState(0.00);
  const [shipping, setShipping] = useState(0.00);
  const [total, setTotal] = useState(0.00);


  useEffect(() => {
    let subtotal = 0;
    let taxes = 0;
    let shipping = 0;
    let total = 0;

    // Calculate subtotal
    cart.forEach(item => subtotal += item.price * item.qty);
    setSubtotal(parseFloat(subtotal).toFixed(2));

    // Calculate taxes
    taxes = subtotal * 0.07;
    setTaxes(parseFloat(taxes).toFixed(2));

    // Calculate shipping
    cart.forEach(item => shipping += item.weight * 5.25);
    setShipping(parseFloat(shipping).toFixed(2));

    // Calculate total
    total = subtotal + taxes + shipping;
    setTotal(parseFloat(total).toFixed(2));
    
    // Store in localstorage
    localStorage.setItem("nuova-cart", JSON.stringify(cart));

  }, [cart]);


  return (
      <aside className='side side-cart'>
        <div className="cart-header">
          <img className='icon-close' src={icon_close} alt="close cart button" onClick={toggleCart} />
          <h3 className='title'>Shopping Cart</h3>
        </div>
        <div className="cart-body">
          {cart.length === 0 ? <h5 className='ms-3'>No items selected yet</h5> : <ul className="list-group">
              {cart.map(item => {
                return (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-1 me-auto">
                      <div className="fw-bold">{item.code}</div>
                      {item.short_description}
                    </div>
                    <div className="">
                      <span className="badge item-qty">{item.qty}</span>
                      <div>
                        <img className='modify-button' src={icon_decrease} onClick={() => removeItem(item)} alt="descrease item button" />
                        <img className='modify-button' src={icon_increase} onClick={() => addItem(item)} alt="increase item button" />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>}
            <div className="summary">
              <div className="m-1 d-flex justify-content-between align-items-start">
                <div className='summary-title'>SUBTOTAL :</div>
                <div>{subtotal}</div>
              </div>
              <div className="m-1 d-flex justify-content-between align-items-start">
                <div className='summary-title'>TAXES :</div>
                <div>{taxes}</div>
              </div>
              <div className="m-1 d-flex justify-content-between align-items-start">
                <div className='summary-title'>SHIPPING :</div>
                <div>{shipping}</div>
              </div>
              <div className="total mx-1 mt-2 d-flex justify-content-between align-items-start">
                <div className='summary-title'>TOTAL :</div>
                <div>{total}</div>
              </div>
            </div>
            <div className="m-1 d-flex justify-content-center">
              <img src={icon_cards} alt="credit cards accepted images" />
            </div>
        </div>
      </aside>
  );
}

export default SideCart;
