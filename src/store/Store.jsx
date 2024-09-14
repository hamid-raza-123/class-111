import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/CounterSlices'

const Store = configureStore({
    reducer: {
        counterSlice,
       
        }
})

export default Store;