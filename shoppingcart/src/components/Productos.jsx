import "./Productos.css"

export function Productos({ Productos }) {
    return (

        <main className="productos">
            <ul>
                {Productos.map(Productos =>

                    <li key={Productos.id}>
                        <img style={{height: "200px", width: "300px"}}
                            src={Productos.thumbnail}
                            alt={Productos.title}
                        />

                        <div className="title">

                            <h3> {Productos.title} - ${Productos.stock} </h3>
                        
                            <p> {Productos.description} </p>
                        
                            <button className="btn">
                                Comprar
                            </button>

                        </div>

                    </li>
                )}

            </ul>
        </main>

    )
}