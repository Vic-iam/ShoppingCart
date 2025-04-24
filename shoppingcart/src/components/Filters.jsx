import React from 'react'

export function Filters() {

    return (

        <section className='filters'>

            <label htmlFor="price">price</label>
            
            <input type='range' id='price' min='0' max='1000' />

        </section>

    )
}
