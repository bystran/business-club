import React, {useState, useEffect} from 'react'
import { ScrollableLink } from 'react-update-url-on-scroll'
import {ReactComponent as Logo} from '../assets/logo.svg'
import '../sass/Navbar.scss'


const Navbar = () => {
    
    const [scrollPos, setScrollPos] = useState(0)
    const [classes, setClasses] = useState("atTop")

    const handleScroll = () => {
        console.log('scrolling')
        const pastPos = scrollPos
        const currentPos = window.pageYOffset
        let classString = ''

        if(currentPos<20){
            classString = 'atTop'
        }

        if(currentPos>pastPos){
            classString = classString.concat(' hidden')
        }

        setScrollPos(currentPos)
        setClasses(classString)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
  
    
    const links = [
        {ref:'/about', title:'About'},
        {ref:'/team', title:'Team'},
        {ref:'/contact', title:'Contact'}
    ]

    const call_to_action_link = {
        ref:'/join', title: 'Join us'
    }

    return(
        <header className={`header ${classes}`}>
            <Logo />
            <nav>
                <ul>
                    {
                        links.map((link, index)=>
                            <li key={index}>
                                <ScrollableLink href={link.ref}>
                                    <a>{link.title}</a>
                                </ScrollableLink>
                            </li>
                        )
                    }


                </ul>
                <div className='underlined'> 
                        <ScrollableLink href={call_to_action_link.ref} >
                                <a>{call_to_action_link.title}</a>
                        </ScrollableLink>
                </div>
            </nav>
        </header>
    )
}


export default Navbar