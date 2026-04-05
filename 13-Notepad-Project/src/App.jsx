import React, { useState } from 'react'


function App() {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const formHandler = (e)=>{
    e.preventDefault()
    console.log(title, details);
    setTitle("")
    setDetails("")
  }

  return (
    <div className='bg-black text-white h-screen lg:flex '>

      <form onSubmit={(e)=>{
        formHandler(e)
        console.log("form submited")
      }}
      className='flex gap-4 lg:w-1/2 p-10 flex-col items-start' >
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        
        <input type="text" 
        placeholder='Enter Notes Heading'  
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
        
        <textarea name="text" 
        placeholder='Write Details'
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded' 
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        
        ></textarea>

        <button className= 'bg-white font-medium w-full text-black outline-none px-5 py-2 rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>

      </div>
      </div>
    </div>
  )
}

export default App
