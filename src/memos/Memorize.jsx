import React, { useState, useCallback } from "react";
import Btn from "./Btn";
import Dato from "./Dato";

const Memorize = () => {
    const [counter, setCounter] = useState(5);
    const [view, setView] = useState(true);

    

    const add = useCallback(() => {
        setCounter(actual => actual + 1);
    }, [setCounter]);

    return (
        <>
            <h1>
                Memorize: <Dato value={counter} />
            </h1>
            <hr />

            <Btn add={add} />

            <button onClick={() => setView(!view)}>ver/quitar</button>
        </>
    );
};

export default Memorize;
