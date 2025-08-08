import { useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GaleriadeProductos from './Galeriadeproductos'
import Contactos from './Contactos'
import Home from './Home'
import Login from './Login'
import { CartContext } from './components/context/CartContext';
import DetallesProductos from './components/DetallesProductos';

function App() {

  const {} = useContext(CartContext)

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route path='/productos/:id' element={<DetallesProductos />} />
          <Route
            path="/productos"
            element={
              <GaleriadeProductos/>
            }
          />
          <Route
            path="/contactos"
            element={
              <Contactos />
            }
          />
        </Routes>

      </Router>
    </>
  );
}

export default App;
