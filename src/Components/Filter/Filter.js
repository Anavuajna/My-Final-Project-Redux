import { useSelector, useDispatch } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/dishesSlice";

const Filter = ({category}) => {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch()

    return(
        <div className={selectedCategory === category ? "categoryButtonSelected" : "category"}>
            <p onClick={() => {dispatch(filterCategory(category))}}>{category}</p>
        </div>
    )
}

export default Filter;