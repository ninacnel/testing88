import React from 'react'

const BeerStyles = ({ items }) => {
  return (
    <div>
        <h3>Estilos</h3>
        {items.map((item) => (
            <p>{item}</p>
        ))}
    </div>
  )
}

export default BeerStyles