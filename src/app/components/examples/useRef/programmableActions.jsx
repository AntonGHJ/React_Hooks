import React, { useRef } from "react";

import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef=useRef()
    const handleClick = () => {
        console.log(inputRef.current)
        inputRef.current.focus()
    }
    const handleClickWidth = () => {
        inputRef.current.style.width='100px'
    }
    const handleClickContent = () => {
        inputRef.current.style.height='150px'
        inputRef.current.style.width='80px'
        inputRef.current.type='text'
        console.log(inputRef.current.type)
    }
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider/>
            <label htmlFor="" className="form-label">Email</label>
            <input ref={inputRef} type="email" className="form-control"
            id='email' />
            <button className="btn btn-primary ms-md-2" onClick={handleClick}>Фокусировка</button>
            <button className="btn btn-secondary ms-md-2" onClick={handleClickWidth}>Изменить ширину</button>
            <button className="btn btn-primary ms-md-2" onClick={handleClickContent}>Изменить параметры</button>
            
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
