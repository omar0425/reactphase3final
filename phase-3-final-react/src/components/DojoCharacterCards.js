import React from 'react'

const DojoCharacterCards = ({c}) => {
 
  return (
    <div className='card'>
      <h2>{c.name}</h2>
      <img className="pic" src={c.image_url} alt={c.name}  />
      </div>
  )
}

export default DojoCharacterCards