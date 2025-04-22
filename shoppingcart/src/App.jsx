import { useState } from 'react'
import './App.css'
import { Productos } from './components/Productos'
import { productos } from './mocks/productos.json'
import { Nav } from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Nav />
  
    <Productos Productos= {productos}    />
   
    </>
  )
}

export default App
