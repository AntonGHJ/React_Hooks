import React from 'react';

const withFunctions = (SimpleComponent) => (props) => {
    const isAuth=localStorage.getItem('auth')
    const onLogIn = () => {
        localStorage.setItem('auth', 'token')
        console.log('Log In')
    }
    const onLogOut = () => {
        localStorage.clear()
        console.log('Log Out')
    }

    return (
        <SimpleComponent onLogIn={onLogIn} onLogOut={onLogOut} isAuth={isAuth} />
    )
}
 
export default withFunctions;