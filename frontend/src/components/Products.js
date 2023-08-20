import '../index.css';
import Card from './Card';
function Products(props) {
  return (
    // console.log({props.products});
        <div className="scrollhorizontal">
           {props.products?.map((products) => (
          <Card
            name={products.product}
            image={products.img}
            price={products.price}
            brand={products.brand}
            link={products.link}
          />
        ))}
        </div>
  );
}

export default Products;