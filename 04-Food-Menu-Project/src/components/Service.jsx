import React from 'react'

function Service(props) {
  return (
    <div className='Service'>
      <div className='Service-icons'>{props.icon }</div>
      <div className='Service-title'>{props.title}</div>
      <div className='Service-descr'>{props.description}</div>
      <button>Check Out</button>
    </div>
  )
}

export default Service
