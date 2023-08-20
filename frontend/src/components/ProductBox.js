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

  const activeCollectionData = props.products[activeCollection];
  
  return (
    <div className='productsbox'>
      <div className='butbox'>
        <button className="navbut" onClick={handlePrevCollection}>&#8249;</button>
        <h2>Collection {activeCollection + 1}</h2>
        <button className="navbut" onClick={handleNextCollection}>&#8250;</button>
      </div>
      {Object.keys(activeCollectionData).map((categoryKey, categoryIndex) => (
        <div key={categoryIndex}>
          <h3>{categoryKey === 'Top' ? 'Topwear' : categoryKey === 'Bottom' ? 'Bottomwear' : categoryKey === 'Foot' ? 'Footwear' : 'Accessories'}</h3>
          <Products products={activeCollectionData[categoryKey]}></Products>
        </div>
      ))}
    </div>
  );
}

export default ProductBox;
