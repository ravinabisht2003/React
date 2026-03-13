import React from 'react'

const App = () => {
  const fumctVar = function (elem){
    console.log(elem);
    
  }
  return (
    <div>
      <button onClick={(elem)=>{
        fumctVar(elem.screenY)
      } }>Click Here</button>
    </div>
  )
}

export default App