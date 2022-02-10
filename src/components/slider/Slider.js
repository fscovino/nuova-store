import React from 'react';

import './styles.css';

function Slider({ products, addItem }) {


  return (
    <main>
      <div id="maincarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {/* Slides Indicators Start Here */}
          {products.map((product, idx) => {
            return (
              <button 
              key={idx}
              type="button" 
              data-bs-target="#maincarousel" 
              data-bs-slide-to={idx} 
              className={idx === 0 ? "active" : null} 
              aria-current={idx === 0 ? "true" : null} 
              aria-label={product.short_description}
              ></button>
            );
          })}
          {/* Slides Indicators End Here */}
        </div>
        <div className="carousel-inner">

          {/* Slides Loop Starts Here */}
          {products.map((product, idx) => {
          return (
          <div key={product.id} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
            <img src={`images/pimg-${product.code}-0.jpg`} className="d-block w-100" alt={product.short_description} />
            <div className="container">
              <div className="row py-5 mt-5">
                <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-between">
                  <div>
                    <h2 className='title'>{product.long_description}</h2>
                    <ul className='features-list pe-3'>
                      {product.features.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="row py-5">
                    <div className="col-6">
                      <h3 className='price text-end'>{`$${product.price}`}</h3>
                    </div>
                    <div className="col-6">
                      <button className='btn btn-buy' onClick={(e) => addItem(product)}>BUY</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-lg-6">
                      <img src={product.images[1]} alt={product.short_description} className='img-gallery img-thumbnail d-block mx-auto img-responsive w-100' />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                      <img src={product.images[2]} alt={product.short_description} className='img-gallery img-thumbnail d-block mx-auto img-responsive w-100' />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-lg-6">
                      <img src={product.images[3]} alt={product.short_description} className='img-gallery img-thumbnail d-block mx-auto img-responsive w-100' />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                      <img src={product.images[4]} alt={product.short_description} className='img-gallery img-thumbnail d-block mx-auto img-responsive w-100' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-5">
                <div className="container">
                  <div className="card">
                    <div className="card-header">
                      <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="true" href=" ">Specs</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href=" ">Reviews</a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Product Specs</h5>
                      <ul>
                        {product.specs.map((item, idx) => <li key={idx}>{`${item.name}: ${item.value}`}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
          })}
          {/* Slides Loops Ends Here */}
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#maincarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#maincarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
}

export default Slider;
