import React from 'react'

const Dato = (({value}) => {
    console.log('cargando componente al pulsar el boton')
   
    return (
        <p>
           { value}
        </p>
    )
})
export default React.memo(Dato)
