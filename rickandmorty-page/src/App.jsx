import { Route, Routes } from "react-router-dom"
import Character from "./pages/character/Character"
import Favorites from "./pages/favorites/Favorites"
import Home from "./pages/home/Home"
import Welcome from "./pages/Welcome/Welcome"


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/character" element={<Character/>}/>

      </Routes>
    </div>
  )
}

export default App
