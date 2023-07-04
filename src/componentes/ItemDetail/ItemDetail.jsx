import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {

  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>Id: {id} </h3>
        <p className='textoBlanco'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facere laborum iusto temporibus, porro esse eaque, veritatis nulla magnam atque reiciendis magni nesciunt natus nemo minus praesentium dolorum illo? Vel.</p>
        <img src={img} alt={nombre} />

    </div>
  )
}

export default ItemDetail