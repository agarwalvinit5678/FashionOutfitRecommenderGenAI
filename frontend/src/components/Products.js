// Import necessary CSS styles and components
import '../index.css';
import Card from './Card';

// Define the Products component for displaying a list of products
function Products(props) {
  return (
    // Scrollable container for displaying products horizontally
    <div className="scrollhorizontal">
      {/* Map through products and display Card component */}
      {props.products?.map((product) => (
        <Card
          // Pass product details as props to the Card component
          name={product.product}
          image={product.img}
          price={product.price}
          brand={product.brand}
          link={product.link}
        />
      ))}
    </div>
  );
}

// Export the Products component
export default Products;
