import React from 'react'
import InputAuth from '../../components/auth/InputAuth'
import ButtonAuth from '../../components/auth/ButtonAuth'

const RegisterLayouts = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [pin,setPin] = useState("")

  const handleRegister = async () => {
    try {
      await axios.post(`${api}/user/register`,{username,password,pin})
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="w-96 h-96 rounded-xl border border-zinc-600 p-10">
      <div className="bg-zinc-700 opacity-25 absolute inset-0 rounded-xl z-0"></div>
        <div className="relative z-10 justify-center items-center grid space-y-5 ">
         <h1 className=' text-center text-white font-bold text-3xl'>R<span className=' text-green-500'>e</span>gister</h1>
        <div className=' grid space-y-7 mt-32'>
          <InputAuth onChange={(e) => setUsername(e.target.value)} name={"username"} />
          <InputAuth onChange={(e) => setPassword(e.target.value)} name={"password"} />
          <InputAuth onChange={(e) => setPin(e.target.value)} name={"create pin"} />
          <ButtonAuth onClick={handleRegister} name={"Register"} />
        </div>
      </div>
    </div>
  )
}

export default RegisterLayouts