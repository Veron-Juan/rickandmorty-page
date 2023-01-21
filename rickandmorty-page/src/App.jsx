import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Welcome from "./pages/Welcome/Welcome"


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
