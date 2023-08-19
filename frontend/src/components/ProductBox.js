import '../index.css';
import Products from './Products';
function ProductBox() {
  return (
    <div className='productsbox'>
        <div className='butbox'>
        <button className="navbut" type="submit">&#8249;</button>
        <h2>Collection1</h2>
        <button className="navbut" type="submit">&#8250;</button>
        </div>
    <h3>Topwear</h3>
    <Products></Products>
    <h3>Bottomwear</h3>
    <Products></Products>
    <h3>Footwear</h3>
    <Products></Products>
    <h3>Accessories</h3>
    <Products></Products>
    </div>
  );
}

export default ProductBox;