import { useState, useEffect } from "react"
import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);
    const{idItem} = useParams();


    useEffect( () => {
        getUnProducto(idItem)
        .then(res => setProducto(res))
    }, [idItem])
  return (
    <div className="cardProducto2">
      <div className="contenedorProductos">
        <ItemDetail {...producto}/>
      </div>
    </div>
  )
}

export default ItemDetailContainer