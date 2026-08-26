import React from 'react'
import Child3 from './child3'
function Child2(props) {
  return (
    <div>
        <Child3 user={props.userinfo}/>
    </div>
  )
}

export default Child2