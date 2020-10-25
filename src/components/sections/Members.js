import React from 'react';
import { connect } from 'react-redux';
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
      text: 'Hi! My name is Alexandra and I am a fourth-year Economics and Business student. I have joined the board in my first year, and since then, it has been an amazing, invaluable experience. I have pursued my interests outside the academic context, developed soft skills, deepened knowledge, but most importantly, met wonderful, very inspirational people. For me, joining the society and getting involved has been definitely worth it!',
    },
    {
      id: 2,
      name: 'Elena Spartali',
      img: 'vp.jpg',
      position: 'Vice President',
      degree: 'Ma (hons) Business and Management',
      text: 'My name is Elena Spartali and I am a fourth year Business and Management student. My role as Vice President involves the cooperation with all the GUBC Board to create events and opportunities for our members, and to check that everything is properly organised, in time and in place. My participation in the club have not only made me develop my communication and organisation skills to a great extent, but it has also helped me to meet like-minded people that share the same enthusiasm with me. Being in the GUBC is one of the greatest opportunities the university life has provided me!',
      li: 'elena-spartali-08239718a',
    },
    {
      id: 3,
      name: 'Robert Baláž',
      img: 'secretary.jpg',
      position: 'Secretary',
      degree: 'Ma (hons) Business and Management',
      li: 'robertbalaz',
      in: 'robert_balaz25',
      text: 'Becoming the Secretary of the Business Club was truly a great decision: I’ve had an amazing time organizing social events as well as dealing with Business Club communication. It’s been a great year so far, and I can confidently say that it was a great way to further develop my own soft skills!',
    },
    {
      id: 4,
      name: 'Ahmad Khashawi',
      img: 'ahmad.jpg',
      position: 'Events Manager',
      degree: 'MA (Hons) Business and Management',
      li: 'ahmad-khashawi-918844189',
      in: 'ahmadkhashawi',
      fb: 'ahmad.khashawi',
      text: 'As the events manager of the board, my job is to organize and monitor events that take place under the GUBC. This includes looking for venues, talking to people in charge of said venues, and arranging a date, time and price. On the board of the GUBC, I have learnt how to cooperate with the different board members and integrate different members jobs with mine to ensure a successful event.',
    },
    {
      id: 5,
      name: 'Mara Parapau',
      img: 'mara.jpg',
      position: 'Marketing Executive',
      degree: 'Computing Science/Business & Management',
      text: 'Hey! My name is Mara and I am a 2nd year Computing Science/Business & Management Student.  I have decided to join the board of the GU Business club in order to contribute to the process of creating engaging development opportunities for people interested in business, whilst gaining experience in this field and meeting inspiring people along the way! As a Marketing Executive, my goal is to bring the events closer to our members and make them accesible for anyone wishing to participate! I am excitedly looking forward to my journey in the board of the Business Club!',
    },
    {
      id: 6,
      name: 'Nina Damjanović',
      img: 'nina.jpg',
      position: 'Treasurer',
      degree: 'Economics',
      text: 'Hi! My name is Nina and I am a second-year Economics student. I have joined the Business club in my first year as a first year representative and am now the treasurer of the club. Being a member of Business club has been an amazing opportunity that allowed me to expand my knowledge and develop skills about different topics alongside being able to network and meet people with real experience of working in the field.',
    },
  ];
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
