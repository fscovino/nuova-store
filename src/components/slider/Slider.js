import React from 'react';

import './styles.css';


function Slider(props) {

  return (
      <main>
          <p>Main</p>
          {props.products.map((product) => <h3 key={product.id}>{product.short_description}</h3>)}
      </main>
  );
}

export default Slider;
