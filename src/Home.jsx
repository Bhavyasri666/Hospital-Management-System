import React,{useContext} from 'react'
import { HospitalContext } from './App'

function Home() {
  const Apollo=useContext(HospitalContext)
  return (
    <div>
      <h1>CEO:{Apollo.CEO}</h1>
      <h2>Manager:{Apollo.Manager}</h2>
      <h3>Co-Founder:{Apollo.CoFounder}</h3>
    </div>
  )
}

export default Home