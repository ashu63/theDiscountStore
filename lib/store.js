import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'

// The Global store setup

export const store = configureStore({
    reducer:{
        basket : basketReducer,
    }
})