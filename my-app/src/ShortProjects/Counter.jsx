import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      alert("Counter cannot be less than 0")
    }
  }
  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  )
}

export default Counter