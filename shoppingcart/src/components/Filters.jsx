import React from 'react'
import "./Filters.css"

export function Filters() {

    return (

        <section className='filters'>
            <div className='filter-group'>
                <label htmlFor="price">Precio</label>
                <input
                    type='range'
                    id='price'
                    min='0'
                    max='1000'
                />
            </div>

            <div className='filter-group'>
                <label htmlFor='category'>Categoría</label>
                <select id="category">
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>

    )
}
