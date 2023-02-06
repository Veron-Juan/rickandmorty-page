import React from 'react'
import { Card, CardBody, Image, Text, Flex, Heading, Button, useDisclosure, Modal, ModalContent, Alert,AlertIcon ,AlertTitle,ModalCloseButton,  } from '@chakra-ui/react'
import {  DeleteIcon } from '@chakra-ui/icons'
import { addFavorite,removeFavorite  } from '../state/reducers/favoriteSlice'
import SuccessAlert from './SuccessAlert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import DeletAlert from './DeletAlert'

const breatheAnimation = keyframes`
 0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}100%{transform:scale3d(1,1,1)}


`

const ContainAlert = styled.div`
 position: absolute;
 top: 80vh;
 animation: .9s ${breatheAnimation} linear both;
 /* display: ${({ isRight}) => isRight ? 'block' : 'none'}; */

 
`


function CardCharacter(props) {
  const dispatch = useDispatch()

  const {favoritesAdded} = useSelector(state => state.favorites)
  const navigate = useNavigate()
  const { isOpen, onOpen={open}, onClose } = useDisclosure()
  const [open, setOpen] = useState(false)
  

  const AgregarFav = (personaje)=>{
    const exist = favoritesAdded.find(i=> i.id === personaje.id)
    if(!exist){
      dispatch(addFavorite(personaje))
    }
    else{
      console.log("repetido pa");
    }
  }
  
  const ir = (unicID)=>{
    navigate(`/character?id=${unicID}`)
  }

  const queonda = (personaje)=>{
    setTimeout(() => {
      dispatch(removeFavorite(personaje))
    }, 1300);
    
    

  }

  return (
    <Card maxWidth="280px" margin="8px" boxShadow="0px 0px 3px 0px black;">
        <CardBody >
              <Image _hover={{transform:"scale(1.1)", transition:"all, .5s"}} borderRadius="10px" src={props.image} alt={props.name} />
              <Heading color="teal" size="sm" textAlign="center" margin="5px 0">{props.name}</Heading>
              <Text fontWeight={700}>Status: {props.status}</Text>
              <Text fontWeight={700}>Specie: {props.specie}</Text>
              {/* <Flex marginTop="5px" justify="space-between" gap={2}>
                <Button>Detail</Button>
                <div  onClick={()=> AgregarFav(props.personaje)}>
              <SuccessAlert/>
              </div>
              </Flex> */}
              {props.succes?
              
              <Flex marginTop="5px" justify="space-between" gap={2}>
                <Button onClick={()=> ir(props.probando)} >Detail</Button>
                
                <div onClick={()=> queonda(props.personaje)}>

                <DeletAlert   />
                </div>
                
              
              </Flex> 
              
              
              : 
              <Flex marginTop="5px" justify="space-between" gap={2}>
                <Button onClick={()=> ir(props.probando)}>Detail</Button>
                <div  onClick={()=> AgregarFav(props.personaje)}>
              <SuccessAlert/>
              </div>
              </Flex> }
        </CardBody>
    </Card>
  )
}

export default CardCharacter
