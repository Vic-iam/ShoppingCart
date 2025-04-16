import { useState } from 'react'
import './App.css'
import { Productos } from './components/Productos'
import { productos } from './mocks/productos.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1 style={{textAlign: 'center', color: 'white'}}> Carro de compra </h1>

    <Productos Productos= {productos}  />
   
    </>
  )
}

export default App
