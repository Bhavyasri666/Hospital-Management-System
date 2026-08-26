import React from 'react'
import Child2 from './child2'
function Child1(props) {
  return (
    <div>
        <Child2 userinfo={props.username}/>
        </div>
  )
}

export default Child1