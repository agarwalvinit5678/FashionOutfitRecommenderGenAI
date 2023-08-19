import '../index.css';
import Card from './Card';
function Products(props) {
  return (
    // console.log({props.products});
        <div className="scrollhorizontal">
           {props.products?.map((products) => (
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