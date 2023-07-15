import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/itemListContainer/itemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import './App.css'

const App = () => {
  return (
    <div className="back">
        <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<h2>Error 404, VAMOS A MORIIIIR!!</h2>}/>
          </Routes>
        </CarritoProvider>
        </BrowserRouter>

        
        
    </div>
  )
}

export default App