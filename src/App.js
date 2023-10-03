import {BrowserRouter, Routes, Route} from "react-router-dom";
import DbProductos from "./Componentes/Productos/DbProductos";
import ItemList from "./Componentes/Productos/ItemList";
import ItemListContainer from "./Componentes/Productos/ItemListContainer";
import NavBar from "./Componentes/NavBar/Navbar";
import ItemDetailContainer from "./Componentes/Productos/ItemDetailContainer";
import Cart from "./Componentes/NavBar/Cart";

function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;