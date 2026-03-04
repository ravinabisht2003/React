import React from 'react'

function OrderMenu(props) {
  return (
    <div className="Menu-Dtls-Name">
      <div>{props.icon}</div>
      <div>{props.name}</div>
      
    </div>
  )
}

export default OrderMenu
