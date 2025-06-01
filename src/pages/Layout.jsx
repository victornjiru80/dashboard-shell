import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  </div>
)

export default Layout