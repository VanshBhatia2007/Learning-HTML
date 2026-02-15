import { useState } from "react";

export default function Counter(){
    let [count,setCount]= useState(0);

    let intCount = ()=>{
        setCount(count+1);
        console.log(count);
    }

    return(
        <>
            <h3>Count={count}</h3>
            <button onClick={intCount}>click me</button>
        </>
    );
}