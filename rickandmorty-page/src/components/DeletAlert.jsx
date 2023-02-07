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
    useDisclosure 
  } from '@chakra-ui/react'
import { DeleteIcon} from '@chakra-ui/icons'

const breatheAnimation = keyframes`
 0%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}100%{transform:scale3d(1,1,1)}
`
const ContainAlert = styled.div`
 position: absolute;
 top: 80vh;
 left: 3%;
transform: translate(-50%, -50%);
 animation: .9s ${breatheAnimation} linear both;
 animation: .9s ${breatheAnimation} linear both;
`

    function DeletAlert() {
      const { isOpen, onOpen, onClose } = useDisclosure();
      return (
        <>
          <Button leftIcon={<DeleteIcon />} colorScheme="red" onClick={onOpen}>
            Delete
          </Button>
          <Modal position="absolute" isOpen={isOpen} onClose={onClose}>
            <ModalContent boxShadow="none">
              <ContainAlert>
                <Alert status="error" width="308px" height="62px">
                  <AlertIcon />
                  <AlertTitle>
                    <Text>Your character was deleted</Text>
                  </AlertTitle>
                  <ModalCloseButton onClick={onClose} />
                </Alert>
              </ContainAlert>
            </ModalContent>
          </Modal>
        </>
      );
    }

    export default DeletAlert;
    