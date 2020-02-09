import React from 'react'
import {connect} from 'react-redux'
import InputField from './InputField'


const RecruitForm = () => {

    const handleSubmit = e => {
        e.preventDefault()
        // send the application form
    } 

    return(
        <form onSubmit={handleSubmit}>
            <InputField 
            name='name'
            label='Name'
            type='text'
            />
            <InputField 
            name='email'
            label='Email'
            type='text'
            />
            <InputField 
            name='degree'
            label='Degree'
            type='text'
            />
            <InputField 
            name='year_study'
            label='Your of study'
            type='text'
            />

        </form>
    )

}

const mapStateToProps = (state) => {
    
}


export default RecruitForm