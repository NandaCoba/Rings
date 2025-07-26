import React, { useState } from 'react'
import InputAuth from '../../components/auth/InputAuth'
import ButtonAuth from '../../components/auth/ButtonAuth'
import axios from 'axios'
import { api } from '../../utils/api'
import toast from 'react-hot-toast'

const LoginLayouts = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${api}/user/login`,{username,password},{
        withCredentials : true
      })

      toast.success("Successfull Login")
      setTimeout(() => {
        if(response) window.location.href = "/"
      }, 1000);
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="w-96 h-96 rounded-xl border border-zinc-600 p-10">
      <div className="bg-zinc-700 opacity-25 absolute inset-0 rounded-xl z-0"></div>
        <div className="relative z-10 justify-center items-center grid space-y-5 ">
         <h1 className=' text-center text-white font-bold text-3xl'>L<span className=' text-green-500'>o</span>gin</h1>
        <div className=' grid space-y-7 mt-32'>
<InputAuth
  onChange={(e) => setUsername(e.target.value)}
  value={username}
  name={"username"}
/>
<InputAuth
  type={"password"}
  onChange={(e) => setPassword(e.target.value)}
  value={password}
  name={"password"}
/>

          <ButtonAuth onClick={handleLogin} name={"Login"} />
        </div>
        <h1 onClick={() => window.location.href = "/forgot_password"} className=' text-center text-white font-bold text-sm cursor-pointer'>Forgot Password</h1>
      </div>
    </div>
  )
}

export default LoginLayouts
