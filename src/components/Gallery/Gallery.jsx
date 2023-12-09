import { useEffect, useState } from 'react'
import Product from '../Product/Product';



const Gallery = () => {
    const [listaProductos, setListaProductos] = useState([]);
    
    useEffect(() => {
        console.log('Pasando por useEffect');
      const cargarDatosAPI = async () => {
        const res = await fetch('https://apiexpress-x7sl.onrender.com/productos');
        const dataProductos = await res.json();

        setListaProductos([...dataProductos]);
      }
    
      cargarDatosAPI();
      
    },[]);
    

    if (listaProductos.length === 0)
        return (
            <>
                <h2>Cargando productos...</h2>
            </>
        )
  return (
    <>
        <div className="grid place-items-center w-full bg-base-200">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">Our Services</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
            
            {
                listaProductos.map((producto) => {
                    return <Product key={producto._id} product={producto}></Product>
                })
            }
            </div>
         </div>
        </div>
    </>
  )
}

export default Gallery