import '../index.css';
function Card(props) {
  return (
        <div className="best-p1">
            <img src={props.image} alt="img"/>
            <div className="best-p1-txt">
                
                <div className="price">
                   {props.brand}
                </div>
                <div className="name-of-p">
                    {props.name}
                </div>
                <div className="price">
                   {props.price}
                </div>
                <div className='Buttons'>
                    <div className="buy-now">
                        <button><a href={props.link}>Buy  Now</a></button>
                    </div>
                    <div className="add-cart">
                        <button>Add To Cart</button>
                    </div>
                </div>
                 
            </div>
        </div>
  );
}

export default Card;