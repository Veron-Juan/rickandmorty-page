import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Card,  Image, Text,  Heading, Button, Stack, CardFooter, CardBody, Flex  } from '@chakra-ui/react'
import { CharacterCards, ContainerCharacters } from '../../styled-components/Layout'
import { ArrowBackIcon } from '@chakra-ui/icons'
import getUnicCharacter from '../../services/getUnicCharacter'
import { useSelector, useDispatch } from 'react-redux'
import SuccessAlert from '../../components/SuccessAlert'
import { addFavorite } from '../../state/reducers/favoriteSlice'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import CardCharacter from '../../components/CardCharacter'

const ConatinerCharacter = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
`


function Character() {
    let query = new URLSearchParams(window.location.search)
    let keyword = query.get('id')
    const navigate = useNavigate()
    const {favoritesAdded} = useSelector(state => state.favorites)
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [name, setName] = useState([]);
    const [img, setImg] = useState([]);
    const [status, setStatus] = useState([]);
    const [gender, setgender] = useState([]);
    const [location, setlocation] = useState([]);
    const [episodies, setepisodies] = useState([]);
    const [specie, setspecie] = useState([]);
    const [origin, setorigin] = useState([]);
    
    useEffect(()=>{
        const fetchData = async ()=> {
            const response = await  fetch(`https://rickandmortyapi.com/api/character/${keyword}`)
            const newData = await response.json();
            const name = newData.name;
            const image = newData.image;
            const status = newData.status;
            const gender = newData.gender;
            const location = newData.location.name;
            const species = newData.species
            const juju = newData
            const episodies = newData.episode
            const origin = newData.origin.name
            setName(name)
            setImg(image)
            setStatus(status) 
            setData(juju)
            setgender(gender)
            setlocation(location)
            setepisodies(episodies)
            setspecie(species)
            setorigin(origin)
            
            
        };
        fetchData()
    }, [{keyword}])
    

    const AgregarFav = (personaje)=>{
        const exist = favoritesAdded.find(i=> i.id === personaje.id)
        if(!exist){
          dispatch(addFavorite(personaje))
        }
        else{
          console.log("repetido pa");
          
          
          
        }
      }
      
  return (
    <>
    <Header/>
    <Heading>Personaje</Heading>
    <ArrowBackIcon
    fontSize="80px"
    color="blue.500"
    onClick={()=> navigate(-1)}
    cursor="pointer"
    />
    <Card maxWidth="320px" margin="0 auto" >
        <CardBody display="flex" justifyContent="center" flexDirection="column" alignItems="center">
              <Image width="270px" _hover={{transform:"scale(1.02)", transition:"all, .5s"}} borderRadius="10px" src={img} alt={name} />
              <Heading color="teal" size="sm" textAlign="center" margin="5px 0">{data.name}</Heading>
              <Text fontWeight={700}>Status: {status} </Text>
              <Text fontWeight={700}>Specie: {specie} </Text>
              <Text fontWeight={700}>Gender: {gender} </Text>
              
              <Text fontWeight={700}>Location: {location} </Text>
              <Text fontWeight={700}>Origin: {origin} </Text>
              <Text fontWeight={700}>Episodies: {episodies.length} </Text>
              
           
              
              
              </CardBody>
              </Card>
    {/* <ContainerCharacters>
    <CardCharacter
    image={data.image}
    name={data.name}
    alt={data.name}
    status={data.gender}
    personaje={data}
    >

    </CardCharacter>
        {/* <CharacterCards>
            <img src={img}/>
            <p>{name}</p>
            <p>{status}</p>
            <div onClick={()=> AgregarFav(data)}>
              <SuccessAlert
              colorScheme='messenger'
              >Save</SuccessAlert>
              </div>
        </CharacterCards> */}
    
    
    </>
  )
}

export default Character
