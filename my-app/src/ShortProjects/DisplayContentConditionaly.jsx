import React, { useState } from 'react'

const DisplayContentConditionaly = () => {
    const [contentDisplay, setDisplay] = useState(false)
  return (
    <>
    <h2>Conditionaly Reander Content</h2>
    {
        contentDisplay ? <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi perferendis quo neque ad natus corporis eius. Culpa neque, dolorem, nihil perferendis possimus impedit ad tempore error voluptate eveniet quisquam blanditiis?</p> : " "
    }
    <button onClick={()=>setDisplay(!contentDisplay)}>Display Content</button>
    </>
  )
}

export default DisplayContentConditionaly