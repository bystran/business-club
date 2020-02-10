import React from 'react'
import '../sass/components/InputField.scss'


const InputField = (props) => {
    const name = props.name
    const label = props.label || 'Input'
    const type = props.type || 'text'

    const renderTextInput = () => {
        const value = props.value 
        return(
            //conditionally add has-value class if value is not empty str
            <div id={props.id} className={`input-field ${value !== "" && 'has-value'}`}>
                <label htmlFor={name}>{label}</label>
                <input 
                type={type} 
                name={name} 
                value={value}
                onChange={(e)=>props.onChange(e.target.value)}
                /> 
            </div>
        )
    }

    const renderNumInput = () => {
        const value = props.value
        return(
            <div id={props.id} className={`input-field ${value !== 0 && 'has-value'}`}>
                <label htmlFor={name}>{label}</label>
                <input 
                type={type} 
                name={name} 
                value={value!==0 && value}
                onChange={(e)=>props.onChange(e.target.value)}
                /> 
            </div>
        )
    }


    // Renders different input based on props.type
    switch (type) {
        case 'text':
            return renderTextInput()    
        case 'number':
            return renderNumInput()
        default:
            break;
    }







}


export default InputField