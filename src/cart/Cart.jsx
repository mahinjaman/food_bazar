import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart, removeCart}) => {
    const { strMeal, strMealThumb } = cart;
    return (
        <div className='cart'>
            <img src={strMealThumb} alt={strMeal} />
            <p>name:- {strMeal}</p>
            <button onClick={()=> removeCart(cart)}>Remove</button>
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.object.isRequired,
    removeCart: PropTypes.func.isRequired
}

export default Cart;