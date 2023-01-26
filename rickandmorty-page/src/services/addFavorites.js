import { useSelector, useDispatch } from "react-redux"


export const AgregarFav = (personaje)=>{

    const dispatch = useDispatch()
    const {favoritesAdded} = useSelector(state => state.favorites)

    const exist = favoritesAdded.find(i=> i.id === personaje.id)
    

    if(!exist){
      dispatch(addFavorite(personaje))
    }
    else{
      null
    }
  }