import '../index.css';
import Card from './Card';
const products = [
  
];

function Products(props) {
  return (
        <div className="scrollhorizontal">
           {products?.map((products) => (
          <Card
            name={products.name}
            image={products.image}
            price={products.price}
            link={products.link}
          />
        ))}
        </div>
  );
}

export default Products;