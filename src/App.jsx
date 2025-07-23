import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from "./src/pages/Login"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
