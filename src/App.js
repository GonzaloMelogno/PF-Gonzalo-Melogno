import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Main/Home";
import Cart from "./Main/Cart";
import Ropa from"./Main/Ropa";
import Juegos from"./Main/Juegos";
import Cocina from"./Main/Cocina";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Ropa' element={<Ropa/>}/>
        <Route path='/Juegos' element={<Juegos/>}/>
        <Route path='/Cocina' element={<Cocina/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;