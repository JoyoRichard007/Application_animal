import { configureStore, combineReducers } from "@reduxjs/toolkit";
import animalReducer from "./animal/reducer";

const store = configureStore({
    reducer: combineReducers({
        animals: animalReducer
    })
})

export default store