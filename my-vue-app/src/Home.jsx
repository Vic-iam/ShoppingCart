import Nav from "./components/Nav"
import ProducList from './components/ProducList'
import loading from '../src/assets/loading.gif'

const Home = ({productos,cargando}) => { 


  return (
    <>
    
      <Nav />

    {
      cargando ? <img src={loading} alt="loading" /> :

      <ProducList productos={productos} />
     }

    </>
    
  )
}
export default Home