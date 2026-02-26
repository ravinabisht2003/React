import React from 'react'

const Card = () => {
    const name = 'Ravina';
    const age = 45;
  return (
    <div className='intro'>
      <h1>Hi, This is {name}.</h1>
      <h2>and I am {age} year old.</h2>
    </div>
  )
}

export default Card
