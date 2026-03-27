import React, { useState } from 'react'

function App() {

  const [title, setTitle] = useState('')
 
  const formHandler = (e)=>{
    e.preventDefault()
    //It help to not reload the form.
    console.log("Form Handler by ", title);

    setTitle('')
    
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)}
      }>
        <input type="text"
         placeholder='Enter your Name'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
