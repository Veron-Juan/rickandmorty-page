import styled from "styled-components";
import vite from "../../public/vite.svg"
import { Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import { Search2Icon} from '@chakra-ui/icons'
import { useState} from "react";
import { Link} from "react-router-dom";
import { useCharecters } from "../hooks/useCharacters";
const API_RICKANDMORTY_CHARACTERS = "https://rickandmortyapi.com/api/character"


const HeaderContainer = styled.header`
width: 100%;
height: 95px;
box-shadow: 0 0 2px 0px blue;
display: flex;
align-items: center;
justify-content: space-around;

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
    width: 510px;
    display: flex;
    align-items: center;
    background-color: #fafcfd;
    

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
        color: #545252;
        &:hover{
            background-color: aliceblue;
            color: #709fcd;
        }
`



function Header() {

    const [characters, setCharacters] = useState([])
    const [busqueda, setBusqueda] = useState("");
    const {personajes} = useCharecters(API_RICKANDMORTY_CHARACTERS)
    
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
  return (
    <HeaderContainer>
      <img src={vite} />
      <Search>
        <InputGroup>
          <InputLeftElement children={<Search2Icon color="gray.300" />} />
          <Input onChange={handleChange} value={busqueda} placeholder="Search" width="510px" />
        </InputGroup>
        <MenuSelected isRight={busqueda} >
            {characters.map((i)=> {
                return(
                    <ul key={i.id}>
                        <img src={i.image}/>
                        <LinkRout to={`/character?id=${i.id}`} >{i.name}</LinkRout>
                    </ul>
                )
            })}
      </MenuSelected>
      </Search>
      <ul>
        <li>Home</li>
        <Link to="/favorites" >Favorites</Link>
        <li>asdsa</li>
        <li>asddas</li>
      </ul>
    </HeaderContainer>
  );
}

export default Header
