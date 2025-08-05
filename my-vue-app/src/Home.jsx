import Nav from "./components/Nav"
import ProducList from './components/ProducList'
import loading from '../src/assets/loading.gif'

const Home = ({cart,productos,cargando, agregarCarrito, borrarProducto}) => { 


  return (
    <>
    
      <Nav borrarProducto={borrarProducto} carItems={cart}/>

    {
      cargando ? <img src={loading} alt="loading" /> :

      <ProducList  agregarCarrito={agregarCarrito} productos={productos} />
     }

    </>
    
  )
}
export default Home