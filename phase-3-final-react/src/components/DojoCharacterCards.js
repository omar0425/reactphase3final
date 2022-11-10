import React from 'react'

const DojoCharacterCards = ({c}) => {
 
  return (
    <div className='card'>
      <h2>{c.name}</h2>
      <img src={c.image_url} alt={c.name} className='Character' />
      </div>
  )
}

export default DojoCharacterCards