import { Route, Routes } from "react-router-dom"
import Character from "./pages/character/Character"
import Episodies from "./pages/episodies/Episodes"
import Favorites from "./pages/favorites/Favorites"
import Detail from "./pages/Detail/Detail"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader"

const Inicio = lazy(()=> import("./pages/Inicio"))
const Home = lazy(()=> import("./pages/home/Home"))


function App() {
  return (
    <div className="App">
     <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/character" element={<Character/>}/>
        <Route path="/episodies" element={<Episodies/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/episodes" element={<Episodies/>}/>
        
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
