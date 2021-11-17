import React, { useState } from 'react'

export const useCounter = (initialvalue) => {
    const [counter, setCounter] = useState(initialvalue)

    const increment =()=>{
    setCounter(counter + 1)
    }
    const decrement =()=>{
        setCounter(counter - 1)
}
return [counter, increment, decrement]
}
