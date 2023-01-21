import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:""
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
      addName: (state, action) => {
          state.name = action.payload.name;
          
      }

    }
  })
  

export const {addName} = userSlice.actions

export default userSlice.reducer