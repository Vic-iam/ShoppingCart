'use client'

import { Filters } from "./filters"

export function Nav( {changeFilters} ) {
    return (

        <div>   
 
            <h1 style={{ textAlign: 'center', color: 'white', padding: "10px" }}> Carro de compra </h1>
            <Filters onChange={changeFilters} />

        </div>

    )
}
