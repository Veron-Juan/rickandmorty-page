import styled, { keyframes } from 'styled-components'
import {
    Modal,
    ModalContent,
    ModalCloseButton,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    Text,
    useColorModeValue,
    useMediaQuery 
  } from '@chakra-ui/react'
  import { StarIcon } from '@chakra-ui/icons'
  import { Link } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'

const breatheAnimation = keyframes`
 0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}100%{transform:scale3d(1,1,1)}
`
const ContainAlert = styled.div`
 position: absolute;
 top: 77vh;
 left: 3%;
transform: translate(-50%, -50%);
 animation: .9s ${breatheAnimation} linear both;
  
 /* @media (max-width: 494px) {
    width: 400px;
  } */


`
    function SuccessAlert() {
      const { isOpen, onOpen, onClose } = useDisclosure();
      const [isLargerThan495] = useMediaQuery('(max-width: 495px)')
      const bg = useColorModeValue("#c6f6d5", "#c6f6d5");
      return (
        <>
          <Button leftIcon={<StarIcon />} colorScheme="teal" onClick={onOpen}>
            Save
          </Button>

          <Modal position="absolute" isOpen={isOpen} onClose={onClose}>
            <ModalContent boxShadow="none">
              <ContainAlert>
                <Alert bg={bg} status="success" width="308px" height="62px" >
                  <AlertIcon />
                  <AlertTitle>
                    <Text color="black" fontSize="14px">
                      Your character was saved! visit it in 
                    </Text>
                    <Link onClick={() => window.scroll(0, 0)} to="/favorites">
                      <u style={{ color: "black" }}>Favorites</u>
                    </Link>
                  </AlertTitle>
                  <ModalCloseButton paddingLeft="24px" color="black" onClick={onClose} />
                </Alert>
              </ContainAlert>
            </ModalContent>
          </Modal>
        </>
      );
    }

    export default SuccessAlert;
    