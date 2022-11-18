import React, {useRef, useState, useEffect} from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    
    const prevState = useRef('')
    const [currentState, setCurrentState] = useState('false')
    const toggleOtherState = () => {
        setCurrentState(prevState=>prevState==='false'?'true':'false')
    }
    useEffect(()=>{
        prevState.current=currentState
    }, [currentState])
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            
            <p>prevSate: {prevState.current}</p>
            <p>currentState: {currentState}</p>
            <button onClick={toggleOtherState}>Toggleoher State</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
