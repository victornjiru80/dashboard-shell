import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import DashboardPage from './pages/DashboardPage'
import Login from './pages/Login'
import Vehicles from './pages/Vehicles'
import Revenue from './pages/Revenue'
import Drivers from './pages/Drivers'
import Tracking from './pages/Tracking'
import Efficiency from './pages/Efficiency'
import Reports from './pages/Reports'



const App = () => {
  return (
    <div>

      <Routes>
       { <Route path='/' element={<Login/>} /> }

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path='vehicles' element={<Vehicles />}/>
          <Route path='revenue' element={<Revenue/>}/>
          <Route path='drivers' element={<Drivers/>}/>
          <Route path='tracking' element={<Tracking />}/>
          <Route path='efficiency' element={<Efficiency/>}/>
          <Route path='reports' element={<Reports/>}/>

        </Route>
      </Routes>


    </div>
  )  
}

export default App