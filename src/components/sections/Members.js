import React from 'react';
import { connect } from 'react-redux';
import Underlined from '../Underlined';
import { initMembers } from '../../reducers/memberReducer';
import MemberMini from '../MemberMini';
import Member from '../Member';
import { showMembCard } from '../../reducers/memberCardReducer';
import '../../sass/sections/Members.scss';

const Members = (props) => {
  const { memberCard, members } = props;
  return (
    <>
      {
      members && members.length ? (
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
                   img={m.photo_url}
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
      )
        : <></>
    }
    </>
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
