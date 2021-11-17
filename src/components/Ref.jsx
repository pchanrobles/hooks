import React, { useRef } from 'react'

const Ref = () => {
  const ref =  useRef(null)
    const handleRef =()=>{
ref.current.value = 'hola mundo'
ref.current.select()
    }
    return (
        <>
           <h1 onClick={handleRef}>useRef</h1> 
           <hr />

           <textarea ref={ref} placeholder="Escribe un mensaje..." name="" id="area" cols="30" rows="10"></textarea>
        </>
    )
}

export default Ref
