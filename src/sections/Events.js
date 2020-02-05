import React from 'react'
import Event from '../components/Event'
import Underlined from '../components/Underlined'

import '../sass/sections/events.scss'

const Events = () =>{
    const events = [
        {date: "2017-02-03T23:40:17+0000", name:'Panel Discussion'},
        {date: "2017-02-03T23:40:17+0000", name:'Panel Discussion'},
        {date: "2017-02-03T23:40:17+0000", name:'Panel Discussion'}
    ]
    return(
        <div className='events-section'>
            <div className='events-heading'>
                <Underlined>
                    <h1>Upcoming events</h1>
                </Underlined>
            </div>

            <div className='events'>
                {events.map((e,index)=>
                    <Event event={e} key={index}/>
                )
                }
            </div>
        </div>

    )
}


export default Events