import React from 'react'
import { Card, CardBody, Image, Text, Flex, Heading, Button} from '@chakra-ui/react'
import { addFavorite,removeFavorite  } from '../state/reducers/favoriteSlice'
import SuccessAlert from './SuccessAlert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DeletAlert from './DeletAlert'

function CardCharacter(props) {
  const dispatch = useDispatch()
  const {favoritesAdded} = useSelector(state => state.favorites)
  const navigate = useNavigate()
  const AgregarFav = (personaje)=>{
    const exist = favoritesAdded.find(i=> i.id === personaje.id)
    if(!exist){
      dispatch(addFavorite(personaje))
    }
    else{
      console.log("character repeat");
    }
  }
  const ir = (unicID)=>{
    navigate(`/character?id=${unicID}`)
  }
  const deleteCharacter = (personaje)=>{
    setTimeout(() => {
      dispatch(removeFavorite(personaje))
    }, 1300);
    
  }

  return (
    <Card maxWidth="280px" margin="8px" boxShadow="0px 0px 3px 0px black;">
      <CardBody>
        <Image
          _hover={{ transform: "scale(1.1)", transition: "all, .5s" }}
          borderRadius="10px"
          src={props.image}
          alt={props.name}
        />
        <Heading color="teal" size="sm" textAlign="center" margin="5px 0">
          {props.name}
        </Heading>
        <Text fontWeight={700}>Status: {props.status}</Text>
        <Text fontWeight={700}>Specie: {props.specie}</Text>

        {props.succes ? (
          <Flex marginTop="5px" justify="space-between" gap={2}>
            <Button onClick={() => ir(props.detail)}>Detail</Button>

            <div onClick={() => deleteCharacter(props.personaje)}>
              <DeletAlert />
            </div>
          </Flex>
        ) : (
          <Flex marginTop="5px" justify="space-between" gap={2}>
            <Button onClick={() => ir(props.detail)}>Detail</Button>
            <div onClick={() => AgregarFav(props.personaje)}>
              <SuccessAlert />
            </div>
          </Flex>
        )}
      </CardBody>
    </Card>
  );
}

export default CardCharacter
