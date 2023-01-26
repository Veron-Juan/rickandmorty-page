import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Heading } from '@chakra-ui/react'
import { CharacterCards, ContainerCharacters } from '../../styled-components/Layout'
import { ArrowBackIcon } from '@chakra-ui/icons'
import getUnicCharacter from '../../services/getUnicCharacter'
import { useSelector, useDispatch } from 'react-redux'
import SuccessAlert from '../../components/SuccessAlert'
import { addFavorite } from '../../state/reducers/favoriteSlice'
import { useNavigate } from 'react-router-dom'

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
    
    useEffect(()=>{
        const fetchData = async ()=> {
            const response = await  fetch(`https://rickandmortyapi.com/api/character/${keyword}`)
            const newData = await response.json();
            const name = newData.name;
            const image = newData.image;
            const status = newData.status;
            const juju = newData
            setName(name)
            setImg(image)
            setStatus(status) 
            setData(juju)
            
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
    <Heading>Personaje</Heading>
    <ArrowBackIcon
    fontSize="80px"
    color="blue.500"
    onClick={()=> navigate(-1)}
    cursor="pointer"
    />
    <ContainerCharacters>
        <CharacterCards>
            <img src={img}/>
            <p>{name}</p>
            <p>{status}</p>
            <div onClick={()=> AgregarFav(data)}>
              <SuccessAlert
              colorScheme='messenger'
              >Save</SuccessAlert>
              </div>
        </CharacterCards>
    </ContainerCharacters>
    </>
  )
}

export default Character
