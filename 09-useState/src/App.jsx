import React, { useState } from 'react'

const App = () => {

  const [value, setvalue] = useState(0)

  function increaseValue (){
    setvalue(value+1);
  }

  
  function decreaseValue (){
    setvalue(value-1);
  }

  function increaseby5 (){
    setvalue(value+5);
  }



  return (
   <div className='main'>
    <h1>Count Value</h1>
    <h2>{value}</h2>
    
    <button onClick={increaseValue}>Increase Value</button>
    <button onClick={decreaseValue}>Decrease Value</button>
    <button onClick={increaseby5}>Increase by 5</button>
    
   </div>
  )
}


export default App

 // const [num, setnum] = useState(30);
  // const [username, setusername] = useState("Ravina")

  // function changeNum (){
  //   setnum(40);
  //   setusername("Abhinav");
  // }

   // <div>
    //   <h1>Value of number {num}. <br /> Value of username {username}.</h1>
    //   <button onClick={changeNum}>Change Value</button>
    // </div>
