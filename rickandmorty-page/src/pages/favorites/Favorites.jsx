import { ArrowBackIcon,  } from '@chakra-ui/icons'
import { ContainerCharacters } from '../../styled-components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import CardCharacter from '../../components/CardCharacter'
import { FontRyM } from '../home/Home'

const Favorites = () => {
  const {favoritesAdded} = useSelector(state => state.favorites)
  const navigate = useNavigate()
  return (
    <>
    <Header/>
    <FontRyM>Favorites</FontRyM>
    <ArrowBackIcon
    fontSize="60px"
    color="teal"
    onClick={()=> navigate(-1)}
    cursor="pointer"
    marginLeft="10px"
    />
    <ContainerCharacters>
        {favoritesAdded.map((i)=> {
          return (
            <CardCharacter key={i.id}
            image={i.image}
            name={i.name}
            status={i.status}
            specie={i.species}
            detail={i.id}
            personaje={i.id}
            succes={true}
            >
            </CardCharacter>
          );
        })}
    </ContainerCharacters>
    </>
  )
}

export default Favorites
