import React, { useRef, useState } from 'react'
import styles from "../pages/welcome/styles.css"
import rickandmorty from "../assets/rickandmortyy.png"
import {  useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addName } from '../state/reducers/userSlice'
import { Input, Button } from '@chakra-ui/react'
import { Aber } from './home/Home'
import portal from "../assets/PORTAL.png"




export default function Inicio() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const nameRef = useRef()
  const [animation, setAnimation] = useState("img-principal")

  const handleSubmit = ()=>{
    setAnimation("img-principal-efect")
    dispatch(addName({name:nameRef.current.value}))
    setTimeout(()=>{
      setAnimation("img-principal")
      navigate("/home")
    }, 2000)

    
    
  }
  // className={`${animation} ? img-principal : ""` }

  return (
    <>
    
    <div className="background-container">
        
        
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className='starfloat'></div>
        <div className='pepinorick'></div>
        <div className='content-principal'>
            <img  className={animation} src={rickandmorty} />
            <Aber style={{marginTop:"340px",marginBottom:"15px"}} >WELCOME</Aber>
            <Input
            placeholder='Enter Your Name'
            width="75%"
            marginLeft="12%"
            color="white"
            padding="25px"
            fontSize="18px"
            ref={nameRef}
            
            />
            <Button
            size="lg"
            width="270px"
            marginLeft="20%"
            marginTop="18px"
            fontSize="19px"
            colorScheme="linkedin"
            _hover={{transform:"scale(1.1)"}}
            onClick={handleSubmit}
            
            
            >Get Started</Button>
            <img className='move' src={portal}/>
            
        </div>
        
        
        {/* <div class="clouds"></div> */}
    </div>
    </>
  )
}
