import styled from "styled-components";
import vite from "../../public/vite.svg"
import { Input, InputGroup, InputLeftElement, useColorMode, useColorModeValue, Flex,  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
useDisclosure, 
Heading} from '@chakra-ui/react'
import {Link as RouteLink
} from "react-router-dom";
import { Search2Icon,  HamburgerIcon, MoonIcon} from '@chakra-ui/icons'
import { useRef, useState} from "react";
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
@media (max-width: 852px) {
    justify-content: center;
    gap: 20px;
  }
@media (max-width: 540px) {
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 30px;
    gap: 10px;
    height: 100%;
  }

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
    width: 250px;
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
export const LinkRout = styled(Link)`

        font-size: 15px;
        color: #286b6a;
      font-weight: 600;
      margin-left: 6px;
        &:hover{
            background-color: aliceblue;
            color: #709fcd;
            width: 100%;
        }
`
const LinksHeader = styled(Link)`
font-weight: 600;
font-size: 17px;
color: #42B4CA;;
&:hover{
  text-decoration: underline;
}
&:active{
  color: #286b6a;
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
justify-content: space-around;
gap: 10px;
@media (max-width: 852px) {
    display: none;
  }
`

const LogoHeader = styled.div`
display: flex;
align-items: center;
@media (max-width: 852px) {
    display: none;
  }
`

const ContainerMenuBurguer = styled.span`
position: absolute;
top: 32px;
right: 10px;

@media (min-width: 852px) {
    display: none;
  }

  @media (max-width: 540px){
    top: 2px;
  }

`



function Header() {

    const [characters, setCharacters] = useState([])
    const [busqueda, setBusqueda] = useState("");
    const {personajes} = useCharecters(API_RICKANDMORTY_CHARACTERS)
    const [theme, toggleTheme] = useThemeMode();
    const { toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
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

    

      const bg = useColorModeValue('light', '#42B4CA;')
      const color = useColorModeValue('white', 'gray.800')



  return (
    <HeaderContainer>
      <img
        style={{ maxWidth: "130px", minWidth: "90px" }}
        src={logorickandmorty}
      />
      <img
      
      />
      <ContainerMenuBurguer>
        <HamburgerIcon
          cursor="pointer"
          fontSize="32px"
          onClick={onOpen}
          position="absolute"
          top="7px"
          right="18px"
        />
      </ContainerMenuBurguer>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Flex marginTop="5px" align="center" justify="center">
            <label className="switch">
              <input type="checkbox" onClick={toggleColorMode} />
              <span className="slider round"></span>
            </label>
            <Flex bg={bg} align="center" justify="center" borderRadius="50%">
              <BackLogo>
                <img src={logo} alt="Dark Mode" />
              </BackLogo>
            </Flex>
          </Flex>
          <DrawerHeader>
            <LinksHeader color="teal" as={RouteLink} to="/home">
              Home
            </LinksHeader>
          </DrawerHeader>
          <DrawerHeader>
            <LinksHeader as={RouteLink} to="/favorites">
              Favorites
            </LinksHeader>
          </DrawerHeader>
          <DrawerHeader>
            <LinksHeader as={RouteLink} to="/favorites">
              Location
            </LinksHeader>
          </DrawerHeader>
          <DrawerHeader>
            <LinksHeader as={RouteLink} to="/favorites">
              Repository
            </LinksHeader>
          </DrawerHeader>
          <DrawerHeader>
            <LinksHeader as={RouteLink} to="/favorites">
              About me
            </LinksHeader>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
      <Search>
        <InputGroup>
          <InputLeftElement children={<Search2Icon color="gray.300" />} />
          <Input
            multiple
            onChange={handleChange}
            value={busqueda}
            placeholder="Search"
            width="250px"
          />
        </InputGroup>
        <MenuSelected isRight={busqueda}>
          {characters.map((i) => {
            return (
              <ul key={i.id} value={i.id}>
                <img src={i.image} />
                <LinkRout to={`/character?id=${i.id}`}>{i.name}</LinkRout>
              </ul>
            );
          })}
        </MenuSelected>
      </Search>

      <LogoHeader>
        <label className="switch">
          <input type="checkbox" onClick={toggleColorMode} />
          <span className="slider round"></span>
        </label>
        <Flex bg={bg} align="center" justify="center" borderRadius="50%">
          <BackLogo>
            <img src={logo} alt="Dark Mode" />
          </BackLogo>
        </Flex>
      </LogoHeader>

      <Links>
        <LinksHeader  to="/home">
          Home
        </LinksHeader>
        <LinksHeader  to="/favorites">
          Favorites
        </LinksHeader>
        <LinksHeader  to="/">
          Location
        </LinksHeader>
        <LinksHeader  to="/home">
          Repository
        </LinksHeader>
      </Links>
    </HeaderContainer>
  );
}

export default Header
