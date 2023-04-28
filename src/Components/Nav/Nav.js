import icon from "./icon.png"

const Nav = () => {
    return (
        <div className="navbar">
            <div className="header-container">
                <img src={icon} alt="icon" className="icon"/>
                <h2 className="header">Фо Бо</h2>
            </div>
            <div className="delivery">
                <h3>ДОСТАВКА И САМОВЫВОЗ</h3>
                <h3>+7(903)181-51-67</h3>
            </div>
        </div>
    )
}

export default Nav;