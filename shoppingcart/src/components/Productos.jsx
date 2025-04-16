import "./Productos.css"

export function Productos({ Productos }) {
    return (

        <main className="productos">
            <ul>
                {Productos.map(Productos =>

                    <li key={Productos.id}>
                        <img
                            src={Productos.thumbnail}
                            alt={Productos.title}

                        />
                        <div>
                            <h3 style={{ color: 'white' }}> {Productos.title} - {Productos.stock} </h3>
                        </div>

                        <div>
                            <p style={{ color: 'white' }}> {Productos.description} </p>
                        </div> 

                        <div>
                            <button>
                                Comprar
                            </button>
                        </div>

                    </li>
                )}

            </ul>
        </main>

    )
}