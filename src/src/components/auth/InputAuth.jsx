// components/auth/InputAuth.jsx
import React from 'react'

const InputAuth = ({ name, type = "text", onChange, value }) => {
  return (
    <input
      type={type}
      placeholder={name}
      className='text-white rounded-lg w-80 h-10 p-2 bg-zinc-800 border border-zinc-600'
      onChange={onChange}
      value={value} // opsional, tapi disarankan kalau controlled input
    />
  )
}

export default InputAuth
