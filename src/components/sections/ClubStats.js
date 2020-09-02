import React from 'react';
import Particles from 'react-particles-js';
import PerkBox from '../PerkBox';
import LinkButton from '../LinkButton';
import '../../sass/sections/ClubStats.scss';
import Vl from '../VerticalLine';

const ClubStats = () => (
  <div className="section-club-stats">
    <div className="club-stats-content">
      <Vl
        className="vl"
        color="#4DEDFF"
        sections={[
          { title: '05', top: '20px' },
        ]}
      />
      <h2 className="inverse-accent-color">
        One of the larges academic societies on canpus
      </h2>
      <h1 className="white">
        Diverse multicultural academic society
      </h1>
      <p className="white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="perk-list">
        <PerkBox
          icon={<></>}
          heading="150+ members"
        >
          We are one of the largest academic societies on campus
        </PerkBox>
        <PerkBox
          icon={<></>}
          heading="30 nationalities"
        >
          Network with students from over 22 countries
        </PerkBox>
        <PerkBox
          icon={<></>}
          heading="22+ successful events"
        >
          We have organized over 20 professional events
        </PerkBox>

      </div>
      <LinkButton href="/join">
        Join the Club
      </LinkButton>
      <LinkButton
        href="https://www.facebook.com/gubusinessclub"
        color="white"
        background="rgba(44, 62, 80, 0.75)"
      >
        Learn more
      </LinkButton>

    </div>
    <div className="club-stats-bg">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="top-pol">
        <polygon points="100,0 0,100 0,0" />
      </svg>
      <Particles />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="bot-pol">
        <polygon points="0,100 100,0 100,100" />
      </svg>
    </div>

  </div>
);

export default ClubStats;
