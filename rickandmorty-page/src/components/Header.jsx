import styled from "styled-components";
import vite from "../../public/vite.svg"
import { Input, InputGroup, InputLeftElement, useColorMode, useColorModeValue,Switch, Flex, Select,  background} from '@chakra-ui/react'
import { Search2Icon} from '@chakra-ui/icons'
import { useState} from "react";
import { Link} from "react-router-dom";
import { useCharecters } from "../hooks/useCharacters";
import logo from "../../public/logoRickAndMorty.png"
import logorickandmorty from "../../public/Rick_and_Morty.svg"
import { ThemeProvider } from "styled-components"
import useThemeMode from "../hooks/useThemeMode."
import GlobalStyles from "../styled-components/GlobalStyles";
// import themes from "../styled-components/Themes";
const API_RICKANDMORTY_CHARACTERS = "https://rickandmortyapi.com/api/character"






const HeaderContainer = styled.header`
max-width: 1200px;
margin: 0 auto;
height: 110px;

display: flex;
align-items: center;
justify-content: space-evenly;

ul{
    display: flex;
    list-style: none;
    li{
        margin: 0 15px;
        font-weight: bold;
        cursor: pointer;
    }
}


`
const Search = styled.div`
display: flex;
align-items: center;
position: relative;

`
const MenuSelected = styled.div`
position: absolute;
left: 0px;
top:40px;
z-index: 2;
display: ${({ isRight}) => isRight ? 'block' : 'none'};


ul{
    width: 320px;
    display: flex;
    align-items: center;
    background-color: #c8dae1d5;
    

    img{
        width: 30px;
    }
    
    li{
        margin: 2.2px;
        padding: 4px;
        width: 100%;
        color: #545252;
        &:hover{
            background-color: aliceblue;
            color: #709fcd;
        }
    }

}

`
const LinkRout = styled(Link)`
        margin: 2.2px;
        padding: 4px;
        width: 100%;
        color: #111111;
        font-weight: bold;
        &:hover{
            background-color: aliceblue;
            color: #709fcd;
        }
`

const BackLogo = styled.div`

max-width: 80px;
min-width: 60px;
max-height: 90px;
min-height: 60px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
border: 3px solid black;



img{
  max-width: 80%;
  min-width: 60%;
}
`

const Links = styled.div`
display: flex;
@media (max-width: 914px) {
    display: none;
  }
`



function Header() {

    const [characters, setCharacters] = useState([])
    const [busqueda, setBusqueda] = useState("");
    const {personajes} = useCharecters(API_RICKANDMORTY_CHARACTERS)
    const [theme, toggleTheme] = useThemeMode();
    const { toggleColorMode } = useColorMode()
    const [check, setCheck] = useState(false)    
    // const {a, b} = themes
    
    const filtrar=(terminoBusqueda)=>{
        const resultadosBusqueda=personajes.filter((elemento)=>{
          if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ){
            return elemento;
          }
        });
        setCharacters(resultadosBusqueda);
      }

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
      }

    

      const bg = useColorModeValue('light', 'blue.500')
      const color = useColorModeValue('white', 'gray.800')



  return (
    
      
    <HeaderContainer>
      <img style={{maxWidth:"130px", minWidth:"90px"}} src={logorickandmorty} />
      <Search>
        <InputGroup>
          <InputLeftElement children={<Search2Icon color="gray.300" />} />
          <Input multiple onChange={handleChange} value={busqueda} placeholder="Search" width="250px" />
        </InputGroup>
        <MenuSelected isRight={busqueda}  >
            {characters.map((i)=> {
                return(
                    <ul key={i.id} value={i.id}>
                        <img src={i.image}/>
                        <LinkRout to={`/character?id=${i.id}`} >{i.name}</LinkRout>
                    </ul>
                )
            })}
      </MenuSelected>
      </Search>
       
      

      <Flex align="center" justify="center"  >
      <label  className="switch" >
        <input  type="checkbox" onClick={toggleColorMode}   />
          <span className="slider round"></span>
      </label>
      <Flex bg={bg} align="center" justify="center" borderRadius="50%" >
      <BackLogo >
        <img  src={logo} alt="Dark Mode"/>
      </BackLogo>
      </Flex>
      </Flex>
      
      <Links>
      
      <ul>
        <li>Home</li>
        <Link to="/favorites" >Favorites</Link>
        <li>asdsa</li>
        <li>asddas</li>
      </ul>
      </Links>
    </HeaderContainer>
    
  );
}

export default Header
