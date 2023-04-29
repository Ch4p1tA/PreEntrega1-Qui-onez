import React from 'react'
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const imgMain = "https://www.extraimagen.cl/283-large_default/letrero-hombres-trabajando-medidas-60-x-60.jpg";
  return (
    <div className='divMain'>
        <h2>Saludo: {props.greeting}</h2>
        <img className='imgMain' src={imgMain} alt="Hombres trabajando" />
    </div>
  )
}

export default ItemListContainer
