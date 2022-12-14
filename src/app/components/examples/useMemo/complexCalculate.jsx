import React from "react";
import { useEffect } from "react";
import { useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n){
    return n?n*factorial(n-1):1
}
function runFactorial(n){
    console.log('Fact Run')
    return factorial(n)
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100)
    const [otherState, setOtherState] = useState(false)

    const buttonColor = otherState?'primary':'secondary'
    useEffect(()=>{
        console.log('render btn color')
    }, [buttonColor])
    
    const fact = useMemo(()=>runFactorial(value), [value])
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Factorial: {fact}</p>
                <button className="btn btn-primary ms-md-2" 
                onClick={()=>setValue(prevState=>prevState+10)}>
                    Increment
                </button>
                <button className="btn btn-primary ms-md-2"
                onClick={()=>setValue(prevState=>prevState-10)}>
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button className={"btn ms-md-2  btn-" + buttonColor} 
                onClick={()=>setOtherState(prevState=>!prevState)}>
                    BUTTON COLORIZED
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
