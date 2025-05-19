import products from '../data/Productos';

function ProducList() {

    return (
        <>

            <div className="productos">
                <h3>Menú</h3>
                {products.map(product => (
                    <div key={product.id} className="product">
                        <span>{product.name} - ${product.price}</span>
                        <button onClick={() => addToCart(product)}>Agregar</button>
                    </div>
                ))}
            </div>

        </>
    )

}

export default ProducList