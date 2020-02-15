import React from 'react'
import '../sass/event.scss'

const Event = (props) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const event = props.event
    const date = new Date(event.start_time)
    const month = months[date.getMonth()]
    

    return (

        <a herf={`https://facebook.com/events/${event.id}`} className='event'>
            <div className='month-year'>{month}, {date.getFullYear()}</div> 
            <div className='event-day'>{date.getDate()}</div>
            <div style={{margin:'0px auto'}}className='event-name'>{event.name}</div>
        </a>

    )
}

export default Event