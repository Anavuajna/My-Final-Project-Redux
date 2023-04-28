import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from 'react-redux';
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    return(
        <div className="dish">
            <img src={`./${dish.img}.jpg`} alt="dish" className="dish-picture"/>
            <h3>{dish.name}</h3>
            <p>Цена: {dish.price} руб.</p>
            <div className="btns">
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button className="cartBtn" onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>В корзину</button>
            </div>
        </div>
    )
}

export default Dish;