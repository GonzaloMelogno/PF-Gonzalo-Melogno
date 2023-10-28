import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemList from "./Componentes/Productos/ItemList";
import ItemListContainer from "./Componentes/Productos/ItemListContainer";
import NavBar from "./Componentes/NavBar/Navbar";
import ItemDetailContainer from "./Componentes/Productos/ItemDetailContainer";
import Cart from "./Componentes/NavBar/Cart";
import ShoppingCartContext from "./Componentes/context/ShoppingCartContext";

function App() {
  return (
    <div className="img-bk">
      <ShoppingCartContext>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </ShoppingCartContext>
    </div>
  );
}

export default App;