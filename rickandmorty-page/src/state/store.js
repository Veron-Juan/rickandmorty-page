import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./reducers/userSlice";
import infoSlice from "./reducers/infoSlice";
import favoriteSlice from "./reducers/favoriteSlice";


export default configureStore({
    reducer: {
        user: userSlice,
        info: infoSlice,
        favorites: favoriteSlice,
    }
})
