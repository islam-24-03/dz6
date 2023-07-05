import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import busketSlice from './slices/basketSlice'

export const store = configureStore({
    reducer: {
        productsSlice,
        busketSlice
    }
})
