import React from 'react'
import {connect} from 'react-redux'
import Underlined from '../Underlined'
import {initMembers} from '../../reducers/memberReducer'
import MemberMini from '../MemberMini'
import Member from '../Member'
import { showMembCard} from '../../reducers/memberCardReducer'
import '../../sass/sections/Members.scss'



const Members = (props) => {
    const members = [
        {
            "id":1,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            "id":2,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            "id":3,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            "id":4,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            "id":5,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            "id":6,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            "id":7,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            "id":8,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            "id":9,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            "id":10,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            "id":11,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            "id":12,
            "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
            "degree":"Ba. Marketing", "fb":"link", "li":"link",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        }

    ]

    return (
        <div className='members-section'>
            <Underlined> <h1>Our Team</h1> </Underlined>
            <div className='members-container'>
                {
                    members.map(m=>
                        <MemberMini 
                        key={m.id}
                        img='profile.jpeg'
                        name={m.name}
                        position={m.position}
                        onClick={()=>{console.log('clicked');props.showMembCard(m)}}
                        />
                    )
                }
            </div>
            {
                props.memberCard !== null &&
                <div className='member-card-holder'>
                     <Member /> 
                </div>

            }

         

        </div>  
    )



}

const mapStateToProps = (state) => {
    return {
        members:state.members,
        memberCard:state.memberCard
    }
}

const mapDispatchToProps = {
    initMembers, showMembCard
}

export default connect(mapStateToProps, mapDispatchToProps) (Members)