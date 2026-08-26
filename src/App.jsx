import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Patients from './Patients';
 import Doctor from './Doctor';
import Navbar from './Components/Navbar';
import NotFound from './NotFound';
import SinglePatients from './SinglePatients';
import SingleDoctor from './SingleDoctor';
import Login from './Login';
import ProtectedRoute from './Components/ProtectedRoute';
export const HospitalContext = createContext()
function App() {
  const HospitalDetails={
    CEO:'Bhavya',
    CoFounder:'Pranathi',
    Manager:'Sri',
    hospital_name:'Apollo'
  }
  return (
    <>
      <HospitalContext.Provider value={HospitalDetails}>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patients" element={<ProtectedRoute>
              <Patients />
            </ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/doctors" element={<ProtectedRoute>
             <React.Suspense fallback="loading Doctors..">
              <Doctors/>
             </React.Suspense>
            </ProtectedRoute>} />
            <Route path="/doctors/:id" element={<SingleDoctor />} />
            <Route path="/patients/:id" element={<SinglePatients />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </HospitalContext.Provider>
    </>
  )
}
export default App;