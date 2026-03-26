import React, { useState } from 'react'

function App() {
  const [num, setnum] = useState(20)
  // const [num, setnum] = useState({user:"Ravina", age:22})
  // const [num, setnum] = useState([10,20,30,40])


    // object value change with the help of useState

  //  const newNum = {...num};
  //  newNum.user='Abhinav';
  //  newNum.age=24;
  //  setnum(newNum);

  // array value change with the help of useState

  // const newArray = [...num];
  // newArray.push(90);
  // setnum(newArray)

  //second method of doing previous method

  // setnum(prev=>({...prev,age:20}))

  //batch update  method
  const valueChngButtn = ()=>{
    setnum(prev=>(prev+1));
    setnum(prev=>(prev+1));
    setnum(prev=>(prev+1));

  }

  return (
    <div className='main'>
      
        <h1>{num}</h1>
        {/* <h1>{num.user}, {num.age}</h1> */}
        {/* <h1>{num}</h1> */}

        <button onClick={valueChngButtn}>Click</button>
      
    </div>
  )
}

export default App
