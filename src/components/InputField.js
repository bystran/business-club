import React from 'react'
import '../sass/components/InputField.scss'


const InputField = (props) => {
    const name = props.name
    const label = props.lable || 'Input'
    const type = props.type || 'text'
    

    const renderTextInput = () => {
        const value = props.value || "123" 
        return(
            <div className={`input-field ${value !== "" && 'has-value'}`}>
                <label htmlFor={name}>{label}</label>
                <input 
                type={type} 
                name={name} 
                value={value}
                /> 
            </div>
        )
    }

    switch (type) {
        case 'text':
            return renderTextInput()    
        default:
            break;
    }







}


export default InputField