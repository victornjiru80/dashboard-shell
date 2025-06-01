import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <div className='flex items-center justify-between px-4 md:px-8 border-gray-300 py-3 bg-white transition-all duration-300 border-b '>
          <img src="" alt="logo" className='h-9 invert opacity-80' />

          <button>Sign out</button>
          
        </div>
    </div>
  )
}

export default Header