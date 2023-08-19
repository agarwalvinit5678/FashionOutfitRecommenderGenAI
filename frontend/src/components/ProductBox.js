import React, { useState } from 'react';
import '../index.css';
import Products from './Products';

function ProductBox(props) {
  const [activeCollection, setActiveCollection] = useState(0);

  const handlePrevCollection = () => {
    setActiveCollection(prevIndex => (prevIndex > 0 ? prevIndex - 1 : props.products.length - 1));
  };

  const handleNextCollection = () => {
    setActiveCollection(prevIndex => (prevIndex < props.products.length - 1 ? prevIndex + 1 : 0));
  };

  const currentCollection = props.products[activeCollection];

  return (
    <div className='productsbox'>
      <div className='collection'>
        <div className='butbox'>
          <button className="navbut" onClick={handlePrevCollection}>&#8249;</button>
          <h2>Outfit {activeCollection + 1}</h2>
          <button className="navbut" onClick={handleNextCollection}>&#8250;</button>
        </div>
        {currentCollection.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3>{categoryIndex === 0 ? 'Topwear' : categoryIndex === 1 ? 'Bottomwear' : categoryIndex === 2 ? 'Footwear' : 'Accessories'}</h3>
            <Products products={category}></Products>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductBox;
