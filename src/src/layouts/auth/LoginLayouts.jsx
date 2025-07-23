import React from 'react'
import InputAuth from '../../components/auth/InputAuth'

const LoginLayouts = () => {
  return (
    <div className="w-96 h-96 rounded-xl border border-zinc-600 ">
      <div className="bg-zinc-700 opacity-25 absolute inset-0 rounded-xl z-0"></div>
        <div className="relative z-10 justify-center items-center grid space-y-5 ">
        <h1 className=' '>Login</h1>
        <div className=' grid space-y-5'>
          <InputAuth name={"Username"} />
          <InputAuth name={"Password"} />
        </div>
      </div>
    </div>
  )
}

export default LoginLayouts
