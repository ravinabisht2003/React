import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import OrderMenu from './components/OrderMenu'
import Navbar from './components/Navbar'

function App() {
  return (
  <div className='Order-Menu'>
    <div className='Nav-Menu'>
      <Navbar/> 
    </div>
   <div className='Menu'>
    <OrderMenu/>

   </div>
   </div>
  )
}

export default App
