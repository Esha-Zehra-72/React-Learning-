import React, { useState } from 'react'

const Counter = () => {
const [counter, setCounter] = useState(0)
const handleDecrement=()=>{
if(counter > 0){
    setCounter(counter - 1)
}
}
  return (
    <>
    <div>{counter}</div>
    <button onClick={()=>setCounter(counter + 1)}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default Counter