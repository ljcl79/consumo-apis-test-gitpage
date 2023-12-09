import React from 'react'

const Product = ({product}) => {
  return (
    <div className="card w-84 bg-base-100 shadow-xl p-0">
    <figure><img src={product.imagenes[0]['url'] ?? './sinimagen.jpg'} alt="Product" style={{width:'100%', height:'20vh', objectFit:'cover'}} /></figure>
    <div className="card-body">
        <h2 className="card-title line-clamp-2">{product.nombre}</h2>
        <p className="line-clamp-3">{product.descripcion}</p>
        <div className='flex justify-between'>
            <div>
                Precio: {product.precio}
            </div>
            <div>
                SKU: {product.sku}
            </div>
        </div>  
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
    </div>
  )
}

export default Product