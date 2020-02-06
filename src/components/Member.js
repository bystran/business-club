import React from 'react'
import '../sass/member.scss'
import {ReactComponent as Fb} from '../assets/icons/fb.svg'
import {ReactComponent as Linkedin} from '../assets/icons/linkedin.svg'
import {ReactComponent as Insta} from '../assets/icons/instagram.svg'

const Member = (props) => {


    return (
        <div className='member-card'>
            <div className='circle-img-cropper'>
                <img 
                    src={require(`../assets/${props.img}`)} 
                    alt="profile img"
                ></img>
            </div>
            <h3>Sonicka Niaka</h3>
            <h4>Vice President</h4>
            <div className='member-bio'>
                <h5>Ba Marketing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='icon-row'>
                <Linkedin />
                <Fb />
                <Insta />

            </div>
                
            
        </div>
    )
}

export default Member