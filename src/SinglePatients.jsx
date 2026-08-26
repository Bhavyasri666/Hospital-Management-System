import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function SinglePatients() {
  const { id } = useParams()
  const [patients, setPatients] = useState([])
  async function fetchData() {
    try {
      const res = await axios.get(`https://doc-back.onrender.com/patients/${id}`)
      console.log(res.data)
      setPatients(res.data)
    }
    catch (error) {
      console.log("Error Message" + error)
    }
    finally {
      console.log("PATIENTS DATA")
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>SinglePatients
      <h1>{id}</h1>
      <h4>Patient Name:{patients.name}</h4>
       <h4>Doctor Name:{patients.doctor?.name}</h4>
      <h5>Disease:{patients.disease}</h5>
      <p>Gender:{patients.gender}</p>
      <p>Age:{patients.age}</p>
    </div>
  )
}

export default SinglePatients