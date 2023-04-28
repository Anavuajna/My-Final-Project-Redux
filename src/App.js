import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Nav/>
      </div>
      <div className='categories-and-cart'>
        <AllCategories/>
        <Cart/>
      </div>
      
      <div>
        <Dishes/>
      </div>
      
    </div>
  );
}

export default App;
