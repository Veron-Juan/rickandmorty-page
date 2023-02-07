import React, { useEffect, useState } from 'react'
import { Card,  Image, Text,  Heading, CardBody, Flex  } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import SuccessAlert from '../../components/SuccessAlert'
import { addFavorite } from '../../state/reducers/favoriteSlice'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { FontRyM } from '../home/Home'


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
          console.log("repeat");

        }
      }
  return (
    <>
    <Header/>
    <FontRyM>Character</FontRyM>
    <ArrowBackIcon
    fontSize="60px"
    color="teal"
    onClick={()=> navigate(-1)}
    cursor="pointer"
    marginLeft="10px"
    />
    <Card maxWidth="300px" margin="25px auto" >
        <CardBody display="stretch" justifyContent="center" flexDirection="column" alignItems="center">
          <Image width="270px" _hover={{transform:"scale(1.02)", transition:"all, .5s"}} borderRadius="10px" src={img} alt={name} />
              
              <Heading color="teal" size="sm" textAlign="center" margin="5px 0">{data.name}</Heading>
              <Text fontWeight={700}>Status: {status} </Text>
              <Text fontWeight={700}>Specie: {specie} </Text>
              <Text fontWeight={700}>Gender: {gender} </Text>
              <Text fontWeight={700}>Location: {location} </Text>
              <Text fontWeight={700}>Origin: {origin} </Text>
              <Text fontWeight={700}>Episodies: {episodies.length} </Text>
              <Flex marginTop="5px" justify="center" gap={2}>  
                <div  onClick={()=> AgregarFav(data)}>
              <SuccessAlert/>
              </div>
              </Flex> 
              </CardBody>
              </Card>
    </>
  )
}

export default Character
