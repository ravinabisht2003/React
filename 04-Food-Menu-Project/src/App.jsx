import './App.css'

import OrderMenu from './components/OrderMenu'
import Navbar from './components/Navbar'
import Service from './components/Service'


function App() {




  return (
  <div className='Order-Menu'>
    <div className='Nav-Menu'>
      <Navbar/> 
    </div>

    <div className='Service-Menu'>
      <h1>Our Features</h1>
      <h4>Let's check our service below <br/>you will get best service</h4>
    
      
    </div>
   <div className='Menu'>
    <OrderMenu/>

   </div>
   </div>
  )
}

export default App
