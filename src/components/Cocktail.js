import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image,name,id,info,glass}) => {
  return (
    <article className='cocktails'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktails-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
      </div>
    </article>
  )
}

export default Cocktail
