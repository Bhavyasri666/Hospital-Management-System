import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

function Patients() {
   
    const { data, load, error } = useFetch('https://doc-back.onrender.com/patients')


    const [search, setSearch] = useState('');
  
    if (load) {
        return <h1>lOading...</h1>
    }
    if (error) {
        return <h1>error...</h1>
    }
       const filteredPatients=data.filter((i)=>{
    
         return  i.name.toLowerCase().includes(search.toLowerCase())
       })
    return (
        <div>
            <input
                type="text"
                placeholder='Enter Patient Information'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />

            {
                data.length === 0 ?
                    (
                        <h1>
                            No data Available
                        </h1>
                    ) :
                    (
                        <>
                            <h1>Patients Information in Apollo</h1>
                            <div id="patientcard">
                                {
                                    data.map((v, i) => (
                                        <div key={v.id} id="card">
                                            <span>
                                                <h4>Patient Name:{v.name}</h4>
                                                <h5>Disease:{v.disease}</h5>

                                                <p>Gender:{v.gender}</p>
                                                <p>Age:{v.age}</p>
                                                <Link to={`/patients/${v.id}`}>View Patient</Link>
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default Patients