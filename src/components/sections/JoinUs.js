import React from 'react';
import BenefitList from '../BenefitList';
import '../../sass/sections/JoinUs.scss';

const JoinUs = () => (
  <div className="join-us-container">

    <div className="join-us-banner">
      <h1 className="white">Like what you see?</h1>
      <p className="white">Join us! Click &quot;Apply&quot; fill the Form and get the benefits of being a member.</p>
    </div>

    <div className="become-member-card">
      <h1>Become a member</h1>
      <p>
        Are you keen to develop your personal and professional skills while learning about the
        current trends in a variety of business sectors?
      </p>
      <p>
        Join Glasgow University Business Club and:
      </p>
      <BenefitList
        benefits={[
          'grow your network',
          'get free access to our events',
          'get a chance to join the board',
          'boost your employability',
        ]}
      />

      <a
        className="link-btn"
        href="https://forms.gle/TrNrAB9UFr5FnXcs9"
        style={{
          background: '#2980B9',
          color: 'white',
        }}
      >
        Apply
      </a>
    </div>
  </div>
);

export default JoinUs;
