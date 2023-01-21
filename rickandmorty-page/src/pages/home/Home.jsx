import React from 'react'
import { Text, FormControl,FormLabel ,Input, Button, Heading } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Home = () => {

    const {name} = useSelector(state=> state.user)
    const navigate = useNavigate();

    

  return (
    <div>
        <ArrowBackIcon
        fontSize="55px"
        color="gray.500"
        cursor="pointer"
        onClick={()=> navigate(-1)}
        />
        <br/>
      <Heading color="purple">WELCOME {name} </Heading>
    </div>
  )
}

export default Home
