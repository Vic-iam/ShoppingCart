import Nav from "./components/Nav"
import ProducList from './components/ProducList'
import loading from '../src/assets/loading.gif'
import { CartContext } from "./components/context/CartContext"
import { useContext } from "react"

const Home = () => { 

  const {cargando} = useContext(CartContext)

  return (
    <>
    
      <Nav />

    {
      cargando ? <img src={loading} alt="loading" /> :

      <ProducList  />
     }

    </>
    
  )
}
export default Home