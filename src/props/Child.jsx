import React from 'react'

const Child = (props) => {
  return (
    <div>
      Child
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <span>{props.color}</span>
      
    </div>
  )
}

export default Child
