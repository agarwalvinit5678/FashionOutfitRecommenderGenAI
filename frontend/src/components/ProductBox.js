import '../index.css';
import Products from './Products';

function ProductBox(props) {
  return (
    <div className='productsbox'>
      {props.products.map((collection, collectionIndex) => (
        <div key={collectionIndex} className='collection'>
          <div className='butbox'>
            <button className="navbut" type="submit">&#8249;</button>
            <h2>Collection {collectionIndex + 1}</h2>
            <button className="navbut" type="submit">&#8250;</button>
          </div>
          {collection.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{categoryIndex === 0 ? 'Topwear' : categoryIndex === 1 ? 'Bottomwear' : categoryIndex === 2 ? 'Footwear' : 'Accessories'}</h3>
              <Products products={category}></Products>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductBox;
