/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import Event from '../components/Event';
import Underlined from '../components/Underlined';

import '../sass/sections/events.scss';

const Events = (props) => {
  const { events } = props;
  const renderEvents = () => {
    if (events && !events.error) {
      return events.map((e, index) => <Event event={e} key={index} />);
    }

    return null;
  };

  return (
    <div className="events-section">
      <div className="events-heading">
        <Underlined>
          <h1>Upcoming events</h1>
        </Underlined>
      </div>

      <div className="events">
        {renderEvents}
      </div>
    </div>

  );
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps, {})(Events);
