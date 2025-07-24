import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-zinc-800 drop-shadow-xl shadow-xl flex items-center px-6">
      <div className="flex justify-between items-center w-full">
        <img src="rings.png" className="w-52 mt-4 object-contain" alt="Logo" />
        <img src="authbg.jpg" className="w-10 h-10 rounded-full object-cover" alt="Profile" />
      </div>
    </div>
  )
}

export default Navbar
