import React from 'react'
import InputAuth from '../../components/auth/InputAuth'
import ButtonAuth from '../../components/auth/ButtonAuth'

const ForgotPasswordLayouts = () => {
  return (
        <div className="w-96 h-96 rounded-xl border border-zinc-600 p-10">
      <div className="bg-zinc-700 opacity-25 absolute inset-0 rounded-xl z-0"></div>
        <div className="relative z-10 justify-center items-center grid space-y-5 ">
         <h1 className=' text-center text-white font-bold text-3xl'>F<span className=' text-green-500'>o</span>got Password</h1>
        <div className=' grid space-y-7 mt-32'>
          <InputAuth name={"input pin"} />
          <InputAuth name={"new password"} />
          <InputAuth name={"confirm password"} />
          <ButtonAuth onClick={"/login"} name={"Change Password"} />
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordLayouts