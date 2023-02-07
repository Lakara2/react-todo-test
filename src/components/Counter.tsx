import { useState } from "react";

export function Counter () {
    const [count, setCount] = useState<number>(0);
    
    function addition () {
        setCount ( count + 1 )
    }

    return(
        <div className='container'>
            <div className='row'>
                <h1 className='col-6 form-control' data-testid={"bryan"}>{count}</h1>
                <button
                    className='col-3 btn-danger btn'
                    type="button"
                    onClick={addition}
                    >Add
                </button>
            </div>
        </div>
    );
}