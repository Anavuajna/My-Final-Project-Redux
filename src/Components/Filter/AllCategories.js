import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="categories">
            { ['САЛАТЫ И ЗАКУСКИ', 'СУПЫ', 'ОСНОВНЫЕ БЛЮДА', 'НАПИТКИ', 'ВСЕ МЕНЮ'].map((category, i) => <Filter category={category} key={i}/>) }
        </div>
    )
}

export default AllCategories;

// import Filter from "./Filter";

// const AllCategories = () => {
//     return(
//         <div className="categories">
//             { ['SALAD', 'SOUP', 'HOT', 'DRINK', 'ALL'].map(category => <Filter category={category} />) }
//         </div>
//     )
// }

// export default AllCategories;