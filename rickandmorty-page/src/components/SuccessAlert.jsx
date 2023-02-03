import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import {
    Modal,
    ModalContent,
    ModalCloseButton,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    Text,
    useColorModeValue
  } from '@chakra-ui/react'
  import { StarIcon } from '@chakra-ui/icons'
  import { Link } from 'react-router-dom'

import { useDisclosure } from '@chakra-ui/react'

const breatheAnimation = keyframes`
 0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}100%{transform:scale3d(1,1,1)}


`

const ContainAlert = styled.div`
 position: absolute;
 top: 80vh;
 animation: .9s ${breatheAnimation} linear both;
 /* display: ${({ isRight}) => isRight ? 'block' : 'none'}; */
 /* animation-duration: 1s; */
 
 /* animation-iteration-count: infinite; */
 
`


  
  
    
    function SuccessAlert() {

        const { isOpen, onOpen, onClose } = useDisclosure()
  
      const bg = useColorModeValue('#c6f6d5', '#c6f6d5')
      return (
        <>
    
          <Button leftIcon={<StarIcon/>} colorScheme="teal"  onClick={onOpen} >Save</Button>
    
          <Modal   position="absolute"   isOpen={isOpen} onClose={onClose} >
            <ModalContent   boxShadow="none" >
            <ContainAlert   >
              <Alert bg={bg}  status="success" width="460px">
                <AlertIcon />
                <AlertTitle><Text color="black">
                    Tu personaje fue guardado! visitalo en
                    </Text>
                    <Link  onClick={()=> window.scroll(0,0)} to="/favorites">
                        <u style={{color:"black"}}
                        
                         >Favoritos</u> 
                         </Link> 
                         </AlertTitle>
            
                
                <ModalCloseButton color="black" onClick={onClose}  />
              </Alert>
              </ContainAlert>
  
            </ModalContent>

            
          </Modal>
        </>
      );
    }
    
    export default SuccessAlert
    