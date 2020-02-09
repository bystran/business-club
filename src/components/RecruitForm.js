import React from 'react'
import {connect} from 'react-redux'
import InputField from './InputField'
import {toggleAggr, changeDegree, changeYear,
         changeGuid, changeEmail , changeName}
    from '../reducers/recruitFormReducer'


const RecruitForm = (props) => {

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
            value={props.form.name}
            onChange={props.changeName}
            />
            <InputField 
            name='guid'
            label='GUID'
            type='text'
            value={props.form.guid}
            onChange={props.changeGuid}
            />
            <InputField 
            name='email'
            label='Email'
            type='text'
            value={props.form.email}
            onChange={props.changeEmail}
            />
            <InputField 
            name='degree'
            label='Degree'
            type='text'
            value={props.form.degree}
            onChange={props.changeDegree}
            />
            <InputField 
            name='year_study'
            label='Year of study'
            type='number'
            value={props.form.year}
            onChange={props.changeYear}
            />

        </form>
    )

}

const mapStateToProps = (state) => {
    return {
        form:state.recruitForm
    }

}

const mapDispatchToProps  = {
    toggleAggr, changeDegree, changeYear,
    changeGuid, changeEmail , changeName
}



export default connect(mapStateToProps, mapDispatchToProps)(RecruitForm)