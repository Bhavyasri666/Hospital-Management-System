import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Doctor() {
  const [doctor, setDoctors] = useState([]);
  const [search, setSaerch] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    salary: '',
    gender: '',
    age: '',
    specialization: ''
  })
  const [editId, setEditId] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editId) {
        const res = await axios.put(`https://doc-back.onrender.com/doctors/${editId}`, formData);
        console.log(res.data);
      }
      else {
        const res = await axios.post("https://doc-back.onrender.com/doctors", formData);
        console.log(res.data);
      }
      await fetchData()
      setFormData({
        name: '',
        salary: '',
        gender: '',
        age: '',
        specialization: ''
      })
      setEditId(null)
    } catch (error) {
      console.log(error);

    } finally {
      console.log("Doctors data");

    }

  }
  function handleEdit(doctorinfo) {
    setFormData({
      name: doctorinfo.name,
      age: doctorinfo.age,
      salary: doctorinfo.salary,
      gender: doctorinfo.gender,
      specialization: doctorinfo.specialization
    }),
      setEditId(doctorinfo.id)
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  async function fetchData() {
    try {
      const res = await axios.get("https://doc-back.onrender.com/doctors");
      console.log(res.data);
      setDoctors(res.data);
    } catch (error) {
      console.log(error);

    } finally {
      console.log("Doctors data");

    }

  }
  useEffect(() => {
    fetchData();
  }, []);
  
  const filterDoctors = useMemo(() => {
    console.log("hello filtered data");
    return doctor.filter((i) => {

      return i.name.toLowerCase().includes(search.toLowerCase())

    })
  }, [search])


  async function handleDelete(id) {
    try {
      const res = await axios.delete(`https://doc-back.onrender.com/doctors/${id}`);
      console.log(res.data);
      await fetchData()
    } catch (error) {
      console.log(error);

    } finally {
      console.log("Doctors data");

    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Doctor Form</h1>
        <input type="text" placeholder='Enter Doctor Name' name="name" value={formData.name} onChange={handleChange} />
        <input type="text" placeholder='Enter Doctor salary' name="salary" value={formData.salary} onChange={handleChange} />
        <input type="text" placeholder='Enter Doctor gender' name="gender" value={formData.gender} onChange={handleChange} />
        <input type="text" placeholder='Enter Doctor age' name="age" value={formData.age} onChange={handleChange} />
        <input type="text" placeholder='Enter Doctor specialization' name="specialization" value={formData.specialization} onChange={handleChange} />
        <button>Add Doctor</button>
      </form><br />


      <input type="text"
        placeholder='Search Doctor.....'
        value={search}
        onChange={(e) => setSaerch(e.target.value)} />
      {filterDoctors.length === 0 ? (
        <h1> NO Doctors are avaliable</h1>

      ) : (
        <>
          <h1>Doctors Information</h1>
          {filterDoctors.map((doctor, i) => (
            <div key={doctor.id} id="card">
              <h3>{doctor.name}  </h3>
              <h4>age:{doctor.age}</h4>
              <h5>gender:{doctor.gender}</h5>
              <p>salary:{doctor.salary}</p>
              <p>Specialization:{doctor.specialization}</p>
              <Link to={`/doctors/${doctor.id}`}>View Doctor</Link>
              <button onClick={() => handleEdit(doctor)} className='btn btn-success'>Edit</button>
              <button onClick={() => handleDelete(doctor.id)} className='btn btn-danger'>Delete</button>
            </div>
          ))}
        </>
      )}
    </div>

  )
}

export default Doctor