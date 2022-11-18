import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData]=useState({})
    const withoutCallback = useRef(0)
    const withCallback = useRef(0)
    const handleChange = ({target}) => {
        setData(prevState=>({...prevState, [target.name]:target.value}))
    }
    const validateWithoutCallback = (data) => {
        console.log(data)
    }
    const validateCallback = useCallback((data) => {
        console.log(data)
    }, [])
    useEffect(()=>{
        validateWithoutCallback(data)
        validateCallback(data)
    }, [data])
    useEffect(()=>{
        withoutCallback.current++
    }, [validateWithoutCallback])
    useEffect(()=>{        
        withCallback.current++
    }, [validateCallback])
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>render Without Callback:{withoutCallback.current}</p>
            <p>render With Callback:{withCallback.current}</p>
            <label htmlFor="" className="form-label">Email</label>
            <input 
            onChange={handleChange} 
            type="email" 
            name='email'
            value={data.email||''}
            className="form-control"
            id='email' />
        </CardWrapper>
    );
};

export default UseCallBackExample;
