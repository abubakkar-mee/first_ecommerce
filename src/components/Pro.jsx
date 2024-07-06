import React from 'react'
import { useLocation } from 'react-router-dom'
import './pro.css'

const Pro = () => {
    const {state} = useLocation()
  return (
    <>
    <div className='area'>
        <img src={state.thumbnail} alt="" />
        <div>
        <h1>{state.price}</h1>
        <h1>{state.stock}</h1>
        <h1>{state.rating}</h1>
        <h2>{state.title}</h2>
        <h2>{state.description}</h2>
        <h2>{state.category}</h2>
        <button>Order</button>
        </div>
    </div>
    </>
  )
}

export default Pro