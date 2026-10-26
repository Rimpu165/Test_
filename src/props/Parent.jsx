import React from 'react'
import Child from './Child'

function Parent(props) {
  return (
    <div>
      Parents
      <Child name="hello" age="2175" color="red"/> 
    </div>
  )
}

export default Parent
