import { useCounter } from "../hooks/useCounter";


export const CounterWithCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter();


    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            
            <hr/>

            <button className="btn btn-primary" onClick={ () => increment(2) }>+2</button>
            <button className="btn btn-primary" onClick={ () => increment(1) }>+1</button>
            <button className="btn btn-warning" onClick={ reset }>Reset</button>
            <button className="btn btn-danger" onClick={ () => decrement(1)}>-1</button>
            <button className="btn btn-danger" onClick={ () => decrement(2) }>-2</button>
        </>
    )
}


