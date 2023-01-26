import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoritesAdded:[],
}
    
    

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
      addFavorite: (state, action) => {
        
        state.favoritesAdded = [...state.favoritesAdded, action.payload] 
        
        },
        // state.favoritesAdded = [...state.favoritesAdded, action.payload]
        //   state.img = action.payload.img;
        //   state.name = action.payload.name;
        //   state.status = action.payload.status;
        //   state.species = action.payload.species;  
        //   state.location = action.payload.location;  
      
      removeFavorite: (state, action)=> {
        const characterId = action.payload;
        state.favoritesAdded = state.favoritesAdded.filter(c => c.id !== characterId)
      }

    }
  })
  

export const {addFavorite, removeFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer