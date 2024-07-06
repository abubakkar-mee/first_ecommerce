import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import './single.css'

const Single = () => {
    const {state} = useLocation();
    const navigate = useNavigate()
    const goBack = () =>{
        navigate('/')
    }
  return (
    <>
    <div>
        <div className='container'>
        <h2>{state.title}</h2>
        </div>
    <button onClick={goBack}>go bak</button>
    </div>
    </>
  )
}

export default Single