import React, { useState } from 'react'
import {
   Heading,
   Modal,
   ModalContent,
   ModalCloseButton,
   Button,
   Alert,
   AlertIcon,
   AlertTitle,
   Text,
   useDisclosure, 
   ModalFooter
 } from '@chakra-ui/react'
 import { ArrowBackIcon, DeleteIcon } from '@chakra-ui/icons'
import { ContainerCharacters, CharacterCards } from '../../styled-components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeFavorite } from '../../state/reducers/favoriteSlice'
import styled, { keyframes } from 'styled-components'
import Header from '../../components/Header'
import CardCharacter from '../../components/CardCharacter'

const breatheAnimation = keyframes`
 0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}100%{transform:scale3d(1,1,1)}


`

const ContainAlert = styled.div`
 position: absolute;
 top: 80vh;
 animation: .9s ${breatheAnimation} linear both;
 /* display: ${({ isRight}) => isRight ? 'block' : 'none'}; */

 
`






const Favorites = () => {
  const {favoritesAdded} = useSelector(state => state.favorites)
  

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [open, setOpen] = useState(true)
  
  


  return (
    <>
    <Header/>
    <Heading>Favoritess</Heading>
    <ArrowBackIcon
    fontSize="80px"
    color="blue.500"
    onClick={()=> navigate(-1)}
    cursor="pointer"
    />
    <ContainerCharacters>
        {favoritesAdded.map((i)=> {
          return (
            <CardCharacter key={i.id}
            image={i.image}
            name={i.name}
            status={i.status}
            specie={i.species}
            probando={i.id}
            personaje={i.id}
            succes={true}
            >

            </CardCharacter>
           
          );
        })}
    </ContainerCharacters>
    </>
  )
}

export default Favorites
