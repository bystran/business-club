import React from 'react'
import BaseImg from '../assets/user.png'
import '../sass/membermini.scss'

const MemberMini  = (props) => {
    
    const handleEroror = e =>{
        e.target.src = BaseImg
    }

    return(
        <div className='member-small' onClick={()=>props.onClick()}>
            <div className='circle-img-cropper'>
                <img 
                    src={require(`../assets/${props.img}`)} 
                    alt="profile img"
                    onError={handleEroror}
                ></img>
            </div>

            <h3>{props.name}</h3>
            <h4>{props.position}</h4>
        </div>
    )
}

export default MemberMini