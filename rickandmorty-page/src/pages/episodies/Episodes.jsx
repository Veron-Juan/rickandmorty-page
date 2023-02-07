import { Button, Flex, Heading, Text, Select  } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useCharecters } from '../../hooks/useCharacters'
import { ContainerCharacters } from '../../styled-components/Layout';
import CardCharacter from '../../components/CardCharacter';
import { Loader } from '../../components/GridSceleton';
import Header from '../../components/Header';
import { Aber } from '../home/Home';
import { PaginationCont } from '../../components/Pagination';
import InputGroup from '../../components/InputGroup';



export default function Episodes() {
  // const [page, setpage] = useState(URL_EPISODES)
  let [resultsCharacters, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  const [actualNum, setActualNum] = useState(1)
  
  
  const URL_EPISODES = `https://rickandmortyapi.com/api/episode/${actualNum}`
  
  
  // const {personajes, informacion} = useCharecters(page)

  

  useEffect(() => {
    (async function () {
      let data = await fetch(URL_EPISODES).then((res) => res.json());
      setInfo(data);

      let charactersEpisodie = await Promise.all(
        data.characters.map((character) => {
          return fetch(character).then((res) => res.json());
        })
      );
      setResults(charactersEpisodie);
    })();
  }, [URL_EPISODES]);

 
  
  

  const nextPage = ()=>{
    // setpage(informacion.next)
    setActualNum((prev)=> prev + 1 )
  }
  const prevPage = ()=>{
    // setpage(informacion.prev)
    setActualNum((prev)=> prev - 1 )
  }

  // const options = [];
  // for (let i = 1; i <= 51; i++) {
  //   options.push({ value: `Episode${i}`, label: `Episode ${i}` });
  // }
  return (
    <>
    <Header/>
    <Aber>EPISODES</Aber>
    <Flex direction="column" justifyContent="center">
      <Flex justify="center" margin="20px auto" gap="10px" align="center">
      {/* <Button  onClick={prevPage} >prev</Button> */}
      <label style={{fontWeight:"600"}}  htmlFor='Episode'>Select episode</label>
      <InputGroup  name="Episode" setActualNum={setActualNum} total={51}  />
      {/* <Button   onClick={nextPage}>next</Button> */}
      </Flex>
      <Flex justifyContent="center" alignContent="center" direction="column" gap="15px" margin="20px auto">
          <Heading marginLeft="12px" fontWeight="600" color="#42B4CA" size="lg">Name episode: <Text color="#42B4CA" as='b'>{name}</Text></Heading>
          {/* <Heading fontWeight="600" color="#42B4CA" size="lg">Episode: <Text color="#42B4CA" as='b'>{episode}</Text> </Heading> */}
          <Heading marginLeft="12px" fontWeight="600" color="#42B4CA" size="lg">Date: <Text color="#42B4CA" as='b'>{air_date}</Text></Heading>
          
    </Flex>
    </Flex>
    <Heading fontWeight="600" textAlign="center" color="#42B4CA">Characters episodie:</Heading>
    
    
    
    
      
        
        
     <ContainerCharacters>

     {resultsCharacters.length !== 0 ? "": <Loader/>}
     {resultsCharacters.map((i)=> {
      return(
        <CardCharacter key={i.created}
        name={i.name}
        image={i.image}
        status={i.status}
        specie={i.species}
        probando={i.id}
        personaje={i}
        >
        </CardCharacter>
      )
     })}

     </ContainerCharacters>
    
    
    
    </>
  )
}
