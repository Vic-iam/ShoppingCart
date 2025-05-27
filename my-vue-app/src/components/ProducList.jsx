import products from '../data/Productos';

function ProducList({ addToCart }) {
    return (
        <div className="productos" style={{
            padding: "2rem",
            backgroundColor: "#1e1e1e",
            minHeight: "100vh",
            color: "white"
        }}>
            <h3 style={{
                textAlign: "center",
                fontSize: "2rem",
                marginBottom: "2rem",
                color: "#f5f5f5"
            }}>Menú</h3>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem"
            }}>
                {products.map(product => (
                    <div
                        key={product.id}
                        className="product"
                        style={{
                            backgroundColor: "#2a2a2a",
                            borderRadius: "12px",
                            padding: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                            transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    >
                        <img
                            src={product.image}
                            alt={product.nombre}
                            style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginBottom: "1rem"
                            }}
                        />
                        <span style={{
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: "1rem"
                        }}>
                            {product.nombre}
                        </span>
                        <span style={{
                            marginBottom: "1rem",
                            fontSize: "1rem",
                            color: "#00c853"
                        }}>
                            ${product.price.toLocaleString()}
                        </span>
                        <button
                            onClick={() => addToCart(product)}
                            style={{
                                backgroundColor: "#00c853",
                                color: "white",
                                border: "none",
                                padding: "0.5rem 1rem",
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "background 0.2s ease"
                            }}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = "#00e676"}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = "#00c853"}
                        >
                            Agregar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProducList;
