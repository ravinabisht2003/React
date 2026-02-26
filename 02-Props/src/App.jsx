import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='parent'>

      {/* with the of props the value will be pass in object */}
      <Card user='Ravina'  img = "https://pressbooks.cuny.edu/app/uploads/sites/93/2022/08/thanuj-mathew-8CSTVoDMEXg-unsplash-scaled.jpg"/>
      <Card user='Abhinav' img = "https://miro.medium.com/v2/resize:fit:2000/1*Z0LbdutgT1vFTbTm-3QeiA.jpeg"/>
      <Card user='Ishu'  img= "https://images.unsplash.com/photo-1710609942195-b9dab8f48fc6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"/>
    </div>
  )
}

export default App
