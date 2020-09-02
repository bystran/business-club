import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Underlined from '../Underlined';
import { initMembers } from '../../reducers/memberReducer';
import MemberMini from '../MemberMini';
import Member from '../Member';
import { showMembCard } from '../../reducers/memberCardReducer';
import '../../sass/sections/Members.scss';

const Members = (props) => {
  const { memberCard } = props;
  const members = [

    {
      id: 1,
      name: 'Alexandra Špiriaková',
      img: 'president.jpeg',
      position: 'President',
      degree: 'Business and Management with Economics',
      in: 'alexandraspiriakova',
      li: 'alexandra-špiriaková-288174156',
      text: 'Hi! My name is Alexandra and I am a third-year Economics and Business student. I have joined the board in my first year, and since then, it has been an amazing, invaluable experience. I have pursued my interests outside the academic context, developed soft skills, deepened knowledge, but most importantly, met wonderful, very inspirational people. For me, joining the society and getting involved has been definitely worth it!',
    },
    {
      id: 2,
      name: 'Elena Spartali',
      img: 'vp.jpg',
      position: 'Vice President',
      degree: 'Ba. Business and Managemen',
      text: 'My name is Elena Spartali and I am a 3rd Year Business and Management Honours Student. My role as Events Manager on the University of Glasgow Business Club have made me gain numerous of skills that they will definitely help me in my future career. I have developed my communication and organisation skills to a great extent, as I have been in contact with many business professionals from dynamic backgrounds of the field. That has given me the opportunity to network and connect with valuable people from well-known companies in the UK. More specifically, my participation in the Club involves Panel Discussion and Field Trip events of forty to fifty persons, as well as responsibilities about the venues, catering and funding.',
    },
    {
      id: 3,
      name: 'Robert Baláž',
      img: 'secretary.jpg',
      position: 'Secretary',
      degree: 'Ba. Business and Managemen',
      li: 'robertbalaz',
      in: 'robert_balaz25',
      text: 'Becoming the Secretary of the Business Club was truly a great decision: I’ve had an amazing time organizing social events as well as dealing with Business Club communication. It’s been a great year so far, and I can confidently say that it was a great way to further develop my own soft skills!',
    },
    {
      id: 4,
      name: 'Mara Parapau',
      img: 'profile.jpeg',
      position: 'Marketing',
      degree: 'Ba. Marketing',
      text: '',
    },
    {
      id: 5,
      name: 'Nina',
      img: 'profile.jpeg',
      position: 'Treasurer',
      degree: '',
      text: '',
    },
    {
      id: 6,
      name: 'Adam Bystran',
      img: 'io.jfif',
      position: 'Technical officer',
      degree: 'Msc. Software engineering',
      li: 'adam-bystran',
      in: 'a.bystran',
      text: "Being the IT consultant for Business Club has imparted great communication skills in me and put my technical expertise to test as I worked on the club's website. In general, it has been an incredible experience; - working with like-minded people and getting to know how a university club is run.",
    },

  ];
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
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
    <div className="members-section">
      <Underlined
        lineColor="#2980b9"
      >
        {' '}
        <h1>Our Team</h1>
        {' '}
      </Underlined>
      <div className="members-container">
        { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <Slider {...settings}>
          {
                    members.map((m) => (
                      <MemberMini
                        key={m.id}
                        img={m.img}
                        name={m.name}
                        position={m.position}
                        onClick={() => { props.showMembCard(m); }}
                      />
                    ))
          }
        </Slider>

      </div>
      {
                memberCard !== null
                && (
                <div className="member-card-holder">
                  <Member />
                </div>
                )

            }

    </div>
  );
};

const mapStateToProps = (state) => ({
  members: state.members,
  memberCard: state.memberCard,
});

const mapDispatchToProps = {
  initMembers, showMembCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
