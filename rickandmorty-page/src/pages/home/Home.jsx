import { Button,  Text } from '@chakra-ui/react'
import { useSelector} from 'react-redux'
import { Loader } from '../../components/GridSceleton'
import { useState } from 'react'
import {  ContainerCharacters } from '../../styled-components/Layout'
import Header from '../../components/Header'
import { PaginationCont } from '../../components/Pagination'
import { useCharecters } from '../../hooks/useCharacters'
import CardCharacter from '../../components/CardCharacter'
import styled from 'styled-components'

const API_RICKANDMORTY_CHARACTERS = "https://rickandmortyapi.com/api/character"
import font from "../../fonts/style.css"

export const FontRyM = styled.p`
/* @font-face {
  font-family: 'Get Schwifty';
  src: local('Get Schwifty'), url("../../fonts/get_schwifty.ttf") format('truetype');
} */
font-family: 'Get Schwifty';
font-size: 52px;
text-align: center;
color: #42B4CA;
text-shadow: 1px 1px 3px yellow;
`
const Home = () => {

    const {name} = useSelector(state=> state.user)
    const [page, setpage] = useState(API_RICKANDMORTY_CHARACTERS)
    const [actualNum, setActualNum] = useState(1)
    const {personajes, informacion} = useCharecters(page)
    
    const nextPage = ()=>{
      setpage(informacion.next)
      setActualNum((prev)=> prev + 1 )
    }
    const prevPage = ()=>{
      setpage(informacion.prev)
      setActualNum((prev)=> prev - 1 )
    }
  return (
    <>
      <Header />
      <br />
      <FontRyM>Welcome {name}</FontRyM>
      <>
        <PaginationCont>
          <Text fontWeight="600">
            Total Pages: <Button size="sm">{informacion.pages}</Button>
          </Text>
          <ul>
            <li>
              {actualNum >= 2 ? <Button onClick={prevPage}>Prev</Button> : null}
            </li>
            <li>
              <Button
                background="gray"
                color="white"
                // _hover={{color:"black"}}
              >
                {actualNum}
              </Button>
            </li>
            <li>
              <Button onClick={nextPage}>Next</Button>
            </li>
          </ul>
        </PaginationCont>
        <ContainerCharacters>
          {personajes.length !== 0 ? "" : <Loader />}
          {personajes.map((i) => {
            return (
              <CardCharacter
                key={i.id}
                image={i.image}
                name={i.name}
                status={i.status}
                specie={i.species}
                detail={i.id}
                personaje={i}
              ></CardCharacter>
            );
          })}
        </ContainerCharacters>
        <PaginationCont>
          <Text>
            Total Pages: <Button size="sm">{informacion.pages}</Button>{" "}
          </Text>
          <ul>
            <li>
              {actualNum >= 2 ? <Button onClick={prevPage}>Prev</Button> : null}
            </li>
            <li>
              <Button background="gray" color="white" colorScheme="messenger">
                {actualNum}
              </Button>
            </li>
            <li>
              <Button onClick={nextPage}>Next</Button>
            </li>
          </ul>
        </PaginationCont>
      </>
    </>
  ); 
} 

export default Home
