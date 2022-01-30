import React from 'react';
import './styles.css';

import logo from '../../img/logo.svg';
import instagram from '../../img/icon_instagram.svg';

function Footer({ products }) {

  return (
      <footer className=''>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 py-2">
              <div className="py-2">
                <a href=' '><img src={logo} alt="" className='w-100'/></a>
              </div>
              <div className='address py-2'>
                <ul>
                  <li>2575 NW 72 Ave</li>
                  <li>Miami, Fl 33166</li>
                  <li>(305) 555-5555</li>
                </ul>
              </div>
              <div className="py-2">
              <a href='https://www.instagram.com/explore/tags/storefront/?hl=en' target="_blank" rel='noreferrer'><img src={instagram} alt="Instagram link" /></a>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 product-link d-flex justify-content-sm-start justify-content-md-center py-4">
              <ul>
                <li><strong>Feature Products</strong></li>
                {products.map((product) => <li key={product.id}><a href=' '>{product.short_description}</a></li>)}
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 py-4">
              <form className="form my-4 my-lg-0">
                <div className="d-grid gap-2">
                  <input className="form-control" type="email" placeholder="Email" aria-label="Email Address" />
                  <button className="btn btn-outline-light" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <p className='copyright py-0'>2002 &copy; NUOVA-STORE All Rights Reserved</p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
