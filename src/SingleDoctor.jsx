import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function SingleDoctor() {
    const[doctor,setDoctor]=useState([]);
    const {id}=useParams();
    async function fetchData() {
        try{
            const res=await axios.get(`https://doc-back.onrender.com/doctors/${id}`)
            setDoctor(res.data)
        }catch(error){
            console.log("Error message:", error);
        }
        finally{
            console.log('Doctor data');
        }  
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <div>SingleDoctor</div>
        <div>Dr.{doctor.name}</div>
        <div>Age: {doctor.age}</div>
        <div>gender: {doctor.gender}</div>
        <div>specialization: {doctor.specialization}</div>
        <div>salary: {doctor.salary}</div>
    </div>
  )
}

export default SingleDoctor