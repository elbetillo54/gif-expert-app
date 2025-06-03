import React from 'react'

function Cards({id, title, url}) {
  return (
    <div className='card'>
        <img
            src={url}
            alt={title}
        />
        <p>{title}</p>
    </div>
  )
}

export default Cards;