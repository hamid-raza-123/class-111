import { createSlice } from "@reduxjs/toolkit"

const  initialState = {
    counter: 0,

}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        addCounter:(state,action)=>{
            // console.log('Add Counter')
state.counter = ++state.counter;
        },

        minuscounter:(state,action)=>{
            // console.log('Add Counter')
state.counter = --state.counter;
        }

    }
     

})



const {actions,reducer}=counterSlice

export const {addCounter,minuscounter} = actions

export default reducer