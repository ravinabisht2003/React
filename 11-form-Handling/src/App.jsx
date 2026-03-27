import React from 'react'

function App() {
 
  const formHandler = (e)=>{
    e.preventDefault()
    //It help to not reload the form.
    console.log("Form Handler");
    
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)}
      }>
        <input type="text" placeholder='Enter your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
