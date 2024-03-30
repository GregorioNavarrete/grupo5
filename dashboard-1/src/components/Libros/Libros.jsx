import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Libros() {
    const [productos, setProductos] = useState([]);
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products');
                if (response.ok) {
                    const data = await response.json();
                    setCat(data.countByCategory);
                    setProductos(data.products);
                } else {
                    throw new Error('Error al obtener los productos');
                }
            } catch (error) {
                console.error(error);
            }
        };

        obtenerProductos();
    }, []);

    return (
        <main className="content-wrap">
            <div className="info-boxes">

                <div className="info-box">
                    <div className="box-icon">
                        {/* Aquí puedes agregar un icono si lo necesitas */}
                    </div>
                    <div className="box-content">
                        <span className="big">{productos.length}</span>
                        Cantidad de libros
                    </div>
                </div>
            </div>
            <div className="info-boxes">
                {cat.map((elemento, i) => {
                    return (
                        <div key={i} className="info-box">
                            {elemento && (
                                <div className="product-item">
                                    <p>Coleccion: {elemento.name}</p>
                                    <p>Cantidad: {elemento.count}</p>
                                    {/* Otros detalles del elemento */}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="info-boxes">
                <div className="info-box">
                    <div className="products-list">
                         {productos.length > 0 && (
                        <div className="product-item">
                            <div className="box-content">
                                 <span className="big">
                                Detalles del ultimo libro
                            </span>
                            </div>
                           
                            <p>Titulo:{productos[productos.length-1]?.title}</p>
                            <p>Precio: {productos[productos.length-1]?.price}</p>
                            <p>Id: {productos[productos.length-1]?.id}</p>
                            {/* <p>Precio: {productos[productos.length-1]?.price}</p> */}
                
                        </div>
                    )}
                    </div> 
                </div>
            </div>

            <section className="content">
                <h2 className="mt-3">Lista de Productos</h2>
                <div className="products-list">
                    {productos.map((producto, i) => (
                        <div key={i} className="product-item">
                            <h3>{producto.title}</h3>
                            <p>Precio: {producto.price}</p>
                            {/* Otros detalles del producto */}
                        </div>
                    ))}
                </div>
                <button>
                    <Link to="/">Volver a Home</Link>
                </button>
            </section>
        </main>
    );
}

export default Libros;
