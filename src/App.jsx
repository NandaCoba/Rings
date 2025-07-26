import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from "./src/pages/Login"
import Register from "./src/pages/Register"
import Home from "./src/pages/Home"
import Notfound from "./src/pages/Notfound"
import ForgotPassword from "./src/pages/ForgotPassword"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
  <div>
    <Toaster position="top-right" />
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/forgot_password" element={<ForgotPassword/>}></Route>


        <Route path="/" element={<Home/>}></Route>

        <Route path="/*" element={<Notfound/>} />
      </Routes>
    </Router>
  </div>
  )
}

export default App
