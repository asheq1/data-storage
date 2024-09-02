import './Cart.css'

const Cart = ({cart, handleRemoveCart}) => {
    return (
        <div >
            <h4>Cart: {cart.length}</h4>
            <div className='cart-container'>
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img src={bottle.img}></img>
                        <button onClick={()=>handleRemoveCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;