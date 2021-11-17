import { cleanup } from "@testing-library/react";
import { useEffect, useState } from "react";

//prevent default en formularios
const Effect = () => {
    const [state, setstate] = useState(0);
    useEffect(() => {
        if (state == "123") {
           // window.addEventListener('mousemove', evento)
        console.log('mounted')
        }
        return()=>{
           console.log('unmounted')
        }
    }, [state]);
    // fecth api

    const handleSubmit = e => {
        e.preventDefault();
    };
    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Search
                    </label>
                    <input
                        value={state}
                        onChange={e => setstate(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Effect;
