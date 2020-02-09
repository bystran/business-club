import React, {useState} from 'react'
import {connect} from 'react-redux'
import { hideMembCard } from '../reducers/memberCardReducer'

import '../sass/components/Member.scss'
import {ReactComponent as Fb} from '../assets/icons/fb.svg'
import {ReactComponent as Linkedin} from '../assets/icons/linkedin.svg'
import {ReactComponent as Insta} from '../assets/icons/instagram.svg'
import {ReactComponent as CloseIcon} from '../assets/icons/close.svg'

const Member = (props) => {

    const [closing, setClosing] = useState('')

    const member = props.member

    const closeCard = () =>{
        setClosing('closing')
        props.hideMembCard(180)
    }

    return (
        <div className={`member-card ${closing}`}>
            <div className='circle-img-cropper'>
                <img 
                    src={require(`../assets${member.img}`)} 
                    alt="profile img"
                ></img>
            </div>
            <h3>{member.name}</h3>
            <h4>{member.position}</h4>
            <div className='member-bio'>
                <h5>{member.degree}</h5>
                <p>{member.text}</p>
            </div>
            <div className='icon-row'>
                <div className='icons-container'>
                    <a href={`https://www.instagram.com/${member.fb}`}>
                    <Insta />
                    </a>
                    <a href={`https://www.linkedin.com/${member.li}`}>
                    <Linkedin />
                    </a>
                    <a href={`https://www.faceboook.com/${member.fb}`}>
                        <Fb />
                    </a>
                </div>
            </div>

            <div 
            className='close-btn'
            onClick={closeCard}
            >
                <CloseIcon />
            </div>  
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        member:state.memberCard
    }
}

const mapDispatchToProps = {
    hideMembCard
}

export default connect(mapStateToProps, mapDispatchToProps) (Member)