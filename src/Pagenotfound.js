import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Pagenotfound() {
    const navigate = useNavigate()
    useEffect (()=> {
        setTimeout(()=>{
          navigate("/")
        },500)
    },[])
    return (
        <div>
           <h1> 404 page not found </h1> 
        </div>
    )
}

export default Pagenotfound
