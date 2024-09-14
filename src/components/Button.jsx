import React from 'react'
import { useDispatch } from 'react-redux'
import { addCounter, minuscounter } from '../store/slices/CounterSlices'


const Button = () => {

    const dispatch = useDispatch()

    const handleAction =()=>{
        dispatch(addCounter());

    }

    const handleAction2 =()=>{
        dispatch(minuscounter());

    }
  return (
<>
<button style={{marginTop:20}} onClick={handleAction}>Add </button>
<button style={{marginTop:20}} onClick={handleAction2}>Delete </button>
</>
  )
}

export default Button