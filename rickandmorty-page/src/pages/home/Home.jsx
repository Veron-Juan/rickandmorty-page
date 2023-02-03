import React from 'react'
import { Button, Heading, useColorModeValue, Card,  CardBody, Image, Text, Flex } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../../components/GridSceleton'
import { useState } from 'react'
import {  CharacterCards, ContainerCharacters, LayoutPage } from '../../styled-components/Layout'
import Header from '../../components/Header'
import { PaginationCont } from '../../components/Pagination'
import { addFavorite } from '../../state/reducers/favoriteSlice'
import SuccessAlert from '../../components/SuccessAlert'
import { useCharecters } from '../../hooks/useCharacters'
import CardCharacter from '../../components/CardCharacter'
import styled from 'styled-components'

const API_RICKANDMORTY_CHARACTERS = "https://rickandmortyapi.com/api/character"
import font from "../../fonts/style.css"


export const Aber = styled.p`
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
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const {pages, next, prev} = useSelector(state => state.info)
    const {favoritesAdded} = useSelector(state => state.favorites)
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
    const AgregarFav = (personaje)=>{
      const exist = favoritesAdded.find(i=> i.id === personaje.id)
      if(!exist){
        dispatch(addFavorite(personaje))
      }
      else{
        console.log("repetido pa");
      }
    }

    
    const bg = useColorModeValue('light', 'blue.500')
  return (
    <> 
    <Header/>
        <br/>
        <Aber>Welcome {name}</Aber>
      
      <>
      <PaginationCont>
      <Text>Total Pages: {informacion.pages} </Text>
        <ul>
            <li>
                {actualNum >= 2? <Button onClick={prevPage}>Prev</Button>: null }
            </li>
            <li>
              <Button
              colorScheme='messenger'
              >{actualNum}</Button>
            </li>
            <li>
                <Button onClick={nextPage}  >Next</Button>
            </li>
        </ul>
      </PaginationCont>
      <ContainerCharacters >
        {personajes.length !== 0 ? "": <Loader/>}
      {
       personajes.map((i)=>{
        return (
          <CardCharacter 
          image={i.image}
          name={i.name}
          status={i.status}
          specie={i.species}
          probando={i.id}
          personaje={i}
          >
            
          </CardCharacter>
        )
      }) }
      </ContainerCharacters>
      <PaginationCont>
      <Text>Total Pages: {informacion.pages} </Text>
        <ul>
            <li>
                {actualNum >= 2? <Button onClick={prevPage}>Prev</Button>: null }
            </li>
            <li>
              <Button
              colorScheme='messenger'
              >{actualNum}</Button>
            </li>
            <li>
                <Button onClick={nextPage}  >Next</Button>
            </li>
        </ul>
      </PaginationCont>
      </>
    </>
  ) 
} 

export default Home
