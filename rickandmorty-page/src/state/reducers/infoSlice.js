import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "count": null,
    "pages": null,
    "next": "",
    "prev": null
}

export const infoSlice = createSlice({
    name: 'info',
    initialState: initialState,
    reducers: {
      addInfo: (state, action) => {
          state.count = action.payload.count;
          state.pages = action.payload.pages;
          state.next = action.payload.next;
          state.prev = action.payload.prev;  
      }

    }
  })
  

export const {addInfo} = infoSlice.actions

export default infoSlice.reducer