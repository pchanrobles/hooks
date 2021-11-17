import React, { useState, useLayoutEffect } from 'react'

const LayoutEffect = () => {
    const [data, setData] = useState([])
    const efecto = data.length
    const newData = [
        {
            name:'Rober',
            email: 'khhkas@hdshhd.com',

        },
        {
            name:'Rober',
            email: 'khhkas@hdshhd.com',

        }
    ]
    useLayoutEffect(() => {
     setTimeout(()=>{
setData(newData)
     }, 3000)
        
        
    }, [])
    return (
        <>
          <h1>useLayoutEffect</h1>  
          <hr />
          <p>Valores: {efecto} </p>
        </>
    )
}

export default LayoutEffect
