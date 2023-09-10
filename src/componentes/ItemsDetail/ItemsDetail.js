import React from "react"
import ItemsCount from "../ItemCount/ItemCount"

const ItemsDetail = ({nombre,img,precio,stock,descripcion}) =>{
    return(
       
        <article className="card">
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img className="img-prod"src={`/img/${img}`} alt={nombre}/>
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    Stock Disponible: {stock}
                </p>
                <p>
                   Categoria: {descripcion}
                </p>
            </section>
            <footer>
            <ItemsCount initial={1} stock={stock} onAdd={(quantity)=>console.log("cantidad agregada", quantity)} />
            </footer>
        </article>

    )
}

    export default ItemsDetail