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
 import { ArrowBackIcon } from '@chakra-ui/icons'
import { ContainerCharacters, CharacterCards } from '../../styled-components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeFavorite } from '../../state/reducers/favoriteSlice'
import styled, { keyframes } from 'styled-components'


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
            <CharacterCards key={i.id}>
              <img src={i.image} />
              <p>{i.name}</p>
              <p>{i.status}</p>
              <p>{i.species}</p>
              <p>location: {i.location.name}</p>
              
              <div onClick={()=> dispatch(removeFavorite(i.id))}>
              <Button onClick={onOpen}  colorScheme="red" >Delete</Button>
              </div>
            
              
               <Modal isOpen={isOpen} onClose={onClose} position="absolute" >
                {/* <ModalOverlay /> */}
                <ModalContent boxShadow="none">
                  <ContainAlert  >
                    <Alert status="error" width="460px">
                      <AlertIcon />
                      <AlertTitle>
                        <Text>Confirmas eliminar?
              
                        </Text>
                      </AlertTitle>

                      <ModalCloseButton  onClick={onClose} />
                    </Alert>
                  </ContainAlert>
                </ModalContent>
              </Modal> 
              
            </CharacterCards>
          );
        })}
    </ContainerCharacters>
    </>
  )
}

export default Favorites
