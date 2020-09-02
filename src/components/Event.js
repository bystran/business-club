import React from 'react';
import '../sass/event.scss';

const Event = (props) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const { event } = props;
  const date = new Date(event.start_time);
  const month = months[date.getMonth()];

  return (

    <div className={`event ${date < new Date(Date.now()) ? 'past' : ''}`}>
      <div className="month-year">
        {date.getDate()}
        {', '}
        {month}
        {' '}
        {date.getFullYear()}
      </div>
      <div style={{ margin: '0px auto' }} className="event-name">{event.name}</div>
      <a
        href={`https://facebook.com/events/${event.id}`}
      >
        see event
      </a>
    </div>

  );
};

export default Event;
