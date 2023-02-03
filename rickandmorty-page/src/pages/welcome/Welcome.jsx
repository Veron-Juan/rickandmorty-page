//chakra
import { Text, FormControl,FormLabel ,Input, Button, Heading } from '@chakra-ui/react'

//redux
import {  useDispatch, useSelector } from 'react-redux'
import { addName } from '../../state/reducers/userSlice';

import { useRef } from 'react';

import { useNavigate } from 'react-router-dom';







function Welcome() {

    const dispatch = useDispatch();
    const {name} = useSelector(state=> state.user)

    const navigate = useNavigate()

    const nameRef = useRef()

    const handleSubmit = ()=>{
        dispatch(addName({name:nameRef.current.value}))
        navigate("/home")
    }

  return (
    <>
      
      <Text fontSize="50px">WELCOME</Text>
      <FormControl isRequired>
        <FormLabel>Ingresa tu nombrasdasde</FormLabel>
        <Input placeholder="Juanse" ref={nameRef} />
      </FormControl>
      
      <br />
      <Button onClick={handleSubmit} >Ingresar</Button>
      <br/>
      
      <Heading>HOLAa </Heading>
      
      
      </>
    
  );
}

export default Welcome

