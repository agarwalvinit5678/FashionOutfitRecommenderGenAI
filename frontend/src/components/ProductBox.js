// Import necessary libraries and CSS styles
import React, { useState } from 'react';
import '../index.css';
import Products from './Products';

// Define the ProductBox component for displaying different product collections
function ProductBox(props) {
  // State to track the active collection index
  const [activeCollection, setActiveCollection] = useState(0);

  // Handler for navigating to the previous collection
  const handlePrevCollection = () => {
    setActiveCollection(prevIndex => (prevIndex > 0 ? prevIndex - 1 : props.products.length - 1));
  };

  // Handler for navigating to the next collection
  const handleNextCollection = () => {
    setActiveCollection(prevIndex => (prevIndex < props.products.length - 1 ? prevIndex + 1 : 0));
  };

  // Get data for the currently active collection
  const activeCollectionData = props.products[activeCollection];
  
  return (
    // Container for displaying product collections
    <div className='productsbox'>
      {/* Navigation buttons and collection title */}
      <div className='butbox'>
        <button className="navbut" onClick={handlePrevCollection}>&#8249;</button>
        <h2>Collection {activeCollection + 1}</h2>
        <button className="navbut" onClick={handleNextCollection}>&#8250;</button>
      </div>
      
      {/* Map through categories in the active collection */}
      {Object.keys(activeCollectionData).map((categoryKey, categoryIndex) => (
        <div key={categoryIndex}>
          {/* Display category title based on categoryKey */}
          <h3>
            {categoryKey === 'Top' ? 'Topwear' : categoryKey === 'Bottom' ? 'Bottomwear' : categoryKey === 'Foot' ? 'Footwear' : 'Accessories'}
          </h3>
          {/* Display products within the category */}
          <Products products={activeCollectionData[categoryKey]}></Products>
        </div>
      ))}
    </div>
  );
}

// Export the ProductBox component
export default ProductBox;
