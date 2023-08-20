// Import the necessary CSS styles
import '../index.css';

// Define the Card component which represents a product card
function Card(props) {
  return (
    // Product card container
    <div className="best-p1">
      {/* Display the product image */}
      <img src={props.image} alt="img" />

      {/* Product details container */}
      <div className="best-p1-txt">
        {/* Display the product brand */}
        <div className="price">
          {props.brand}
        </div>

        {/* Display the product name */}
        <div className="name-of-p">
          {props.name}
        </div>

        {/* Display the product price */}
        <div className="price">
          {props.price}
        </div>

        {/* Buttons container */}
        <div className='Buttons'>
          {/* "Buy Now" button */}
          <div className="buy-now">
            <button><a href={props.link}>Buy Now</a></button>
          </div>

          {/* "Add To Cart" button */}
          <div className="add-cart">
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the Card component
export default Card;
