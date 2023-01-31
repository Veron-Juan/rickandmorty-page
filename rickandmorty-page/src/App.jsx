import { Route, Routes } from "react-router-dom"
import Character from "./pages/character/Character"
import Episodies from "./pages/episodies/Episodies"
import Favorites from "./pages/favorites/Favorites"
import Home from "./pages/home/Home"
import Welcome from "./pages/Welcome/Welcome"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styled-components/GlobalStyles"
import useThemeMode from "./hooks/useThemeMode."
import switchstyles from "../src/assets/Switch/switchStyle.css"
import logo from "../public/logoRickAndMorty.png"
import styled  from "styled-components";
import Header from "./components/Header"


// const themes = {
//   default: {
//     colors: {
//       background: "#f1f1f1", // Color de fondo
//       surface: "#FFF", // Color de fondo de tarjetas.
//       text: "#989898", // Color del texto
//       text2: "#000", // Color de las cantidades
//       prueba: "##e2e8f0"
      
//     },
//   },
//   dark: {
//     colors: {
//       background: "#23292d",
//       surface: "#32383b",
//       text: "#FFF",
//       text2: "#317e94",
//       prueba: "#2196F3"
//     },
//   },
// };

const BackLogo = styled.div`
/* background-color: ${({ theme }) => theme.colors.prueba}; */
width: 80px;
height: 80px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
border: 3px solid black;


img{
  width: 62px;
}
`


function App() {
  
  

  return (
    
      
    <div className="App">
      

      
      {/* <div style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
      <label className="switch" >
        <input type="checkbox"onClick={toggleTheme} />
          <span className="slider round"></span>
      </label>
      <BackLogo>
        <img  src={logo}/>
      </BackLogo>

      </div> */}
      
      
     
      
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/character" element={<Character/>}/>
        <Route path="/episodies" element={<Episodies/>}/>


      </Routes>
    </div>
    
  )
}

export default App
