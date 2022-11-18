import React from 'react';
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

const LogOutButton = ({onLogOut}) => {
    useEffect(()=>{
        console.log('render button')
    })    
    return <button className="btn btn-primary" onClick={onLogOut}>LogOut</button>
}
LogOutButton.propTypes={
    onLogOut:PropTypes.func
}
const MemoizedLogOutButton = React.memo(LogOutButton)

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false)
    const handleLogOut = useCallback( () => {
        localStorage.removeItem('auth')
    }, [])
    return <>
    <button className="btn btn-primary" 
    onClick={() => setState(!state)}>Initiate rerender</button>
    <MemoizedLogOutButton onLogOut={handleLogOut}/>
    </>;
};

export default MemoWithUseCallbackExample;
