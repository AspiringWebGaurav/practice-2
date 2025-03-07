import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/index.js'
export default configureStore({
    reducer : {
counter : counterReducer
    },
})