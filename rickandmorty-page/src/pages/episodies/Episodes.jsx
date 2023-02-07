import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { ContainerCharacters } from '../../styled-components/Layout';
import CardCharacter from '../../components/CardCharacter';
import { Loader } from '../../components/GridSceleton';
import Header from '../../components/Header';
import { FontRyM } from '../home/Home';
import InputGroup from '../../components/InputGroup';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function Episodes() {
  let [resultsCharacters, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  const [actualNum, setActualNum] = useState(1);
  const navigate = useNavigate()
  const URL_EPISODES = `https://rickandmortyapi.com/api/episode/${actualNum}`;

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

  return (
    <>
      <Header />
      <FontRyM>EPISODES</FontRyM>
      <ArrowBackIcon
    fontSize="60px"
    color="teal"
    onClick={()=> navigate(-1)}
    cursor="pointer"
    marginLeft="10px"
    />
      <Flex direction="column" justifyContent="center">
        <Flex justify="center" margin="20px auto" gap="10px" align="center">
          <label style={{ fontWeight: "600" }} htmlFor="Episode">
            Select episode
          </label>
          <InputGroup name="Episode" setActualNum={setActualNum} total={51} />
        </Flex>
        <Flex
          justifyContent="center"
          alignContent="center"
          direction="column"
          gap="15px"
          margin="20px auto"
        >
          <Heading marginLeft="12px" fontWeight="600" color="#42B4CA" size="lg">
            Name episode:{" "}
            <Text color="#42B4CA" as="b">
              {name}
            </Text>
          </Heading>
          <Heading marginLeft="12px" fontWeight="600" color="#42B4CA" size="lg">
            Date:{" "}
            <Text color="#42B4CA" as="b">
              {air_date}
            </Text>
          </Heading>
        </Flex>
      </Flex>
      <Heading fontWeight="600" textAlign="center" color="#42B4CA">
        Characters episodie:
      </Heading>
      <ContainerCharacters>
        {resultsCharacters.length !== 0 ? "" : <Loader />}
        {resultsCharacters.map((i) => {
          return (
            <CardCharacter
              key={i.created}
              name={i.name}
              image={i.image}
              status={i.status}
              specie={i.species}
              detail={i.id}
              personaje={i}
            ></CardCharacter>
          );
        })}
      </ContainerCharacters>
    </>
  );
}
