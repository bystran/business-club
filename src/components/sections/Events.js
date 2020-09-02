/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Event from '../Event';
import Underlined from '../Underlined';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../sass/sections/events.scss';

const Events = (props) => {
  const { events } = props;
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className="events-section">
      <div className="events-heading">
        <Underlined
          lineColor="#2980b9"
          marginLeft="10px"
        >
          <h1>Upcoming events</h1>
        </Underlined>
      </div>

      <div className="events">
        { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <Slider {...settings}>
          {
            events && !events.error
            && events.map((e, index) => <Event event={e} key={index} />)

          }
        </Slider>

      </div>
    </div>

  );
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps, {})(Events);
