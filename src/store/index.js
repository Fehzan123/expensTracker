
import {configureStore} from "@reduxjs/toolkit"
import {authReducer} from './auth'

import { darkModeReducer } from "./auth";
const store =configureStore({
    reducer:{auth:authReducer,darkMode: darkModeReducer},
    
})




export default store;