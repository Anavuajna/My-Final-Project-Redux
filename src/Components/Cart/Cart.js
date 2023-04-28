import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import cartIcon from "./shop3.png"
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)

    return(
        <div className="cart">
            <img className="cartIcon" src={cartIcon} alt="cartIcon"/>
            <h3 className="totalPrice">ИТОГО: {totalPrice} руб.</h3>
            {cartItems.map((cartItem, i) => <CartItem cartItem={cartItem} key={i}/>)}
        </div>
    )
}

export default Cart;