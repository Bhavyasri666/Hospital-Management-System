import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div id="navbar">
        <style>
            {
                `
                *{
                  margin:0%;
                }
                #navbar{
                background-color:black;
                display:flex;
                flex-direction:flex-row;
                justify-content:space-around;
                padding:10px;
                
                }
                #connection{
                color:white
                }
                `
            }
        </style>
        <Link to="/" id="connection">Apollo</Link>
        <Link to="/patients" id="connection">Patients Information</Link>
        <Link to="/doctors" id="connection">Expertised Doctors</Link>
    </div>
  )
}

export default Navbar