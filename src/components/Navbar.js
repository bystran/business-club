import React from 'react'
import { ScrollableLink } from 'react-update-url-on-scroll'
import {ReactComponent as Logo} from '../assets/logo.svg'
import '../sass/Navbar.scss'


const Navbar = () => {
    const links = [
        {ref:'/about', title:'About'},
        {ref:'/team', title:'Team'}
    ]

    const call_to_action_link = {
        ref:'/join', title: 'Become Member'
    }

    return(
        <header class='header'>
            <Logo />
            <nav>
                <ul>
                    {
                        links.map((link, index)=>
                            <li>
                                <ScrollableLink href={link.ref}>
                                    <a>{link.title}</a>
                                </ScrollableLink>
                            </li>
                        )
                    }
                    <li>
                        <ScrollableLink href={call_to_action_link.ref}>
                            <a>{call_to_action_link.title}</a>
                        </ScrollableLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}


export default Navbar