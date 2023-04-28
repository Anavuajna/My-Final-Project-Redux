import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";
import deleteItem from "./delete.png"

const CartItem = ( {cartItem} ) => {
    console.log(cartItem)

    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();

    return (
        <div className="cartItem">
            <p className="dishName">{dishes.name} </p>
            <p className="dishQuantity">{cartItem.quantity} шт</p>
            <p className="dishPrice">{dishes.price * cartItem.quantity} руб.</p>
            <span className="deleteItemSpan" onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}><img className="deleteItem" src={deleteItem} alt="delete"/></span>
        </div>
    )
}

export default CartItem;