import React, { useState, useEffect  } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";
import PropTypes from 'prop-types'

const FormComponent = ({children}) => {
    const [data, setData] = useState({})
    useEffect(()=>{console.log(data) }, [data])
    const handleChange = (target) => {
        setData(prevState => ({...prevState, [target.name]:target.value}))
    }
    return React.Children.map(children, (child) => {
        const config = {
            ...child.props, 
            onChange: handleChange, 
            value: data[child.props.name]||''}
        return  React.cloneElement(child, config)         
    })   
}

const ListComponent = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);
    return React.Children.map(arrayOfChildren, (child) =>
        React.cloneElement(child, {
            ...child.props,
            num: +child.key.replace(".", "") + 1
        })
    );
};

const ReactChildrenExample = () => {    
    const Component = ({ num}) => {
        return <div className="mb-4">
        <ol>{num}{'. Компонент списка'}</ol>
    </div> 
    };    
    return (
        <>
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider/>
            <FormComponent>            
                <TextField name='email' label = 'email'/>
                <TextField name='password' label = 'Пароль' type='password'/>
            </FormComponent>
        </CardWrapper>
        <Divider/>
        <SmallTitle>Домашка</SmallTitle>
        <Divider/>
            <ListComponent>
                <Component/>
                <Component/> 
                <Component/> 
                <Component/>                 
            </ListComponent>
        </>
    );
};

FormComponent.propTypes = {
    children:PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}
ListComponent.propTypes = {
    children:PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default ReactChildrenExample;
