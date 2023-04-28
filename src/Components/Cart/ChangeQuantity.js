const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if (quantity <= 1 ) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return(
        <div className="quantity">
            <p onClick={removeQuantity} className="btnRemove">-</p>
            <p>{quantity}</p>
            <p onClick={addQuantity} className="btnAdd">+</p>
        </div>
    )
}

export default ChangeQuantity;