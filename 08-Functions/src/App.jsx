import React from 'react'

const App = () => {
  const fumctVar = function (elem){
    console.log(elem);
  }
  return (
    <div onWheel={fumctVar}>
      {/* <button onClick={(elem)=>{
        fumctVar(elem.screenY)
      } }>Click Here</button> */}

      <div className='box1'></div>
      <div className='box2'></div>
      <div className='box3'></div>
    </div>
  )
}

export default App