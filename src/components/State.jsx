import { useState, useEffect } from "react";

const State = () => {
    const [state, setState] = useState(0);
    
    useEffect(()=>{
        console.log(state);
    }, [])
    
    const handleClick = () => {
        setState(state + 1);
    };

    // setInterval(()=>{
    //     //setState(state + 1)
    // })
    return (
        <div className="container text-center">
            <h1>useState</h1>
            <hr />
            <h1>useEfect</h1>
            <hr />
            Cuenta: {state}
            <button onClick={handleClick}>+1</button>
        </div>
    );
};

export default State;
