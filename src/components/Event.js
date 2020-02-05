import React from 'react'
import '../sass/event.scss'

const Event = (props) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const event = props.event
    const date = new Date(event.date)
    const month = months[date.getMonth()]
    

    return (
        <div className='event'>
            <div className='month-year'>{month}, {date.getFullYear()}</div> 
            <div className='event-day'>{date.getDate()}</div>
            <div className='event-name'>{event.name}</div>
        </div>
    )
}

export default Event