import React from 'react'
import { Button, Heading, useColorModeValue, Card,  CardBody, Image, } from '@chakra-ui/react'
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
const API_RICKANDMORTY_CHARACTERS = "https://rickandmortyapi.com/api/character"


const Home = () => {

    const {name} = useSelector(state=> state.user)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    const {pages, next, prev} = useSelector(state => state.info)
    const {favoritesAdded} = useSelector(state => state.favorites)
    const [page, setpage] = useState(API_RICKANDMORTY_CHARACTERS)
    const [actualNum, setActualNum] = useState(1)
    
    const {personajes, informacion} = useCharecters(page)
    // let numerodespues = informacion.next
    // let actual = numerodespues.slice(-1)  

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
  return personajes?  (
    <>  
    <Header/>
        <ArrowBackIcon
        fontSize="55px"
        color="gray.500"
        cursor="pointer"
        onClick={()=> navigate(-1)}
        bg={bg}
        />
        <br/>
      <Heading color="purple">WELCOME {name} </Heading>
      <>
      <PaginationCont>
      <p>Total Pages: </p>
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
      {
       personajes.map((i)=>{
        return (
            <Card key={i.id} >
              <CardBody>
              <img src={i.image}/>
              <Heading size="sm">{i.name}</Heading>
              <p>{i.status}</p>
              <p>{i.species}</p>
              <p>location: {i.location.name}</p>
              <div onClick={()=> AgregarFav(i)}>
              <SuccessAlert
              colorScheme='messenger'
              >Save</SuccessAlert>
              </div>
              </CardBody>
              
            
            </Card>
        )
      })}
      </ContainerCharacters>
      </>
    </>
  ) : <div>CARGANDO</div>
} 

export default Home
