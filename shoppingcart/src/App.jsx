import { useState } from 'react'
import './App.css'
import { Productos } from './components/Productos'
import { productos } from './mocks/productos.json'
import { Nav } from './components/Nav'

function App() {
  const [count, setCount] = useState(0)
  const [filters, setFilters] = useState({
     category: 'all',
     minPrice: 0
  })
  
  const filterProducts = (productos) => {
    return productos.filter(product => {
      return(
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(productos)

  return (
    <>
   
    <Nav changeFilters={setFilters} />
  
<<<<<<< HEAD
    <Productos Productos= {filteredProducts}/>
=======
    <Productos Productos= {filteredProducts}    />
>>>>>>> 9cbbabb4704e6d61c52ee720aed6d538eb4986db
   
    </>
  )
}

export default App
