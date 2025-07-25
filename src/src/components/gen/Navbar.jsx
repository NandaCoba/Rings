import React, { useState, useRef } from 'react'
import { Power } from 'lucide-react'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const avatarRef = useRef(null)

  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleBlur = (e) => {
    if (!avatarRef.current?.contains(e.relatedTarget)) {
      setDropdownOpen(false)
    }
  }

  const handleLogout = () => {
    console.log('Logging out...')
    // Tambahkan logika logout di sini
  }

  return (
    <div className="w-full h-20 bg-zinc-800 drop-shadow-xl shadow-xl flex items-center px-6">
      <div className="flex justify-between items-center w-full">
        <img src="rings.png" className="w-52 mt-4 object-contain" alt="Logo" />

        <div className="relative" onBlur={handleBlur}>
          <button
            onClick={handleToggle}
            ref={avatarRef}
            className="focus:outline-none"
          >
            <img
              src="authbg.jpg"
              className="w-10 h-10 rounded-full object-cover"
              alt="Profile"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-10 overflow-hidden">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-100"
              >
                <Power className="w-4 h-4 text-red-500" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
