import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import GaleriadeProductos from './Galeriadeproductos'
import Contactos from './Contactos'
import Home from './Home'
import Login from './Login'
import productosdata from './data/Productos'

function App() {

  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      setProductos(productosdata);
      setCargando(false);
    } catch (error) {
      console.log("Error", error);
      setError(true);
      setCargando(false);
    }
  }, [])

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleDeleteFromCart = (product) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        } else {
          return item;
        }
      }).filter(item => item !== null);
    })
  }


  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} />}
        />
        <Route
          path="/"
          element={
            <Home
              borrarProducto={handleDeleteFromCart}
              agregarCarrito={handleAddToCart}
              cart={cart}
              productos={productos}
              cargando={cargando}
            />
          }
        />
        <Route
          path="/productos"
          element={
            <GaleriadeProductos
              borrarProducto={handleDeleteFromCart}
              agregarCarrito={handleAddToCart}
              cart={cart}
              productos={productos}
              cargando={cargando}
            />
          }
        />
        <Route
          path="/contactos"
          element={
            <Contactos borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
