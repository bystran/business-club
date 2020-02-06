import React from 'react'
import {connect} from 'react-redux'
import Underlined from '../components/Underlined'
import {initMembers} from '../reducers/memberReducer'
import MemberMini from '../components/MemberMini'
import Member from '../components/Member'
import '../sass/sections/members.scss'


const Members = (props) => {



    return (
        <div className='members-section'>
            <Underlined> <h1>Our Team</h1> </Underlined>
            <MemberMini 
                img='profile.jpeg'
                name='Sonicka Niaka'
                position='Vice President'
            />
            {/* <Member  img='profile.jpeg'/>  */}
        </div>  
    )



}

const mapStateToProps = (state) => {
    return {
        members:state.members
    }
}

const mapDispatchToProps = {
    initMembers,
}

export default connect(mapStateToProps, mapDispatchToProps) (Members)