import React from 'react';
import '../../sass/pages/mentorshipPage.scss';
import Paragraph from '../Paragraph';
import LinkButton from '../LinkButton';

import MentorFAQ from '../sections/MentorFAQ';

const MentorshipPage = () => (
  <div className="mentorship-page-wrapper">
    <header className="mentorship-header">
      <Paragraph
        darkMonde
        heading={(
          <>
            <h2>Glasgow University Business Club</h2>
            <h1>Mentorship Programme</h1>
          </>
        )}
      >
        <p>
          Seize a unique opportunity to set and pursue
          goals of your choosing with an experienced mentor who will offer guidance,
          advice, and insights to help you achieve them faster.
          We do not restrict the nature of the goals you wish to pursue –
          if you wish to launch a startup, land the internship of your dreams,
          or score stellar academic results, a mentor will help you with just that.
        </p>
        <a
          className="link-btn"
          href="https://forms.gle/Nu9NqEooFAGSF8P58"
          style={{
            background: '#2980B9',
            color: 'white',
            marginRight: '20px',
          }}
        >
          Apply
        </a>
        <LinkButton
          href="events"
          color="white"
          background="rgba(44, 62, 80, 0.45)"
        >
          Learn more
        </LinkButton>
        {/* <div className="mentorship-link">
          <a href="https://forms.gle/Nu9NqEooFAGSF8P58">Appyly </a>
        </div> */}
      </Paragraph>

    </header>

    <div className="mentorship-description">
      <div className="desc-name">
        <h2 className="inverse-accent-color">
          Your Mentor will help you
        </h2>
        <h1 className="inverse-color">
          Persue & Reach Your Goals
        </h1>
      </div>
      <div className="desc-cont">
        The programme is designed to give you the unique opportunity to
        set and pursue goals of your choosing under the guidence of an experience mentor,
        who will offer guidance,advice, and insights to help you achieve what you set
        out; be it launching a startup, landing the internship of your dreams,
        or scoring stellar academic results. The mentor will help you with just that.
      </div>

      <div className="desc-name">
        <h3 className="inverse-color">
          What will be expected of me?
        </h3>
      </div>
      <div className="desc-cont" style={{ marginTop: '20px', paddingTop: '0px' }}>
        The programme requires you to dedicate some of your free time and
        prep work before each meeting; consider if your schedule can accommodate
        this. We will supply successful applicants with a list of
        recommended areas to cover each meeting.
        Mentoring also requires you to reflect and apply new insights you
        gathered from your mentor, and may require a degree of time flexibility
        – the mentors often have busy schedules, and being able to adapt to
        their availability may be necessary at times.
        Effective mentoring also requires discipline – to prepare for the
        meetings, diligently work on the goals you have set, and be
        proactive throughout the programme.
      </div>

      <div className="desc-name">
        <h3 className="inverse-color">
          What is the mentorship programme NOT for
        </h3>
      </div>
      <div className="desc-cont" style={{ marginTop: '20px', paddingTop: '0px' }}>
        The programme is not a casual conversation – a healthy mentor-mentee
        relationship requires putting in effort and applying what you have
        taken from the discussions into your life. Mentoring also
        requires you to work consistently towards the goals you have set.
        It is not a source of motivation – while the help of mentorship is
        inspiring and confidence-boosting, it should not be taken as a
        source of external motivation. We are looking for people who are
        fired up and are eager to gain an edge that will help them later in life.
        The mentor will not assist you with your assignments.
        Please keep in mind that the mentor is also not infallible. While
        they are experienced and offer valuable insights, think
        critically about what you will be discussing – feel free
        to disagree and offer your own perspective  on things.
      </div>
      <div className="desc-name" style={{ paddingBottom: '20px' }}>
        <h3 className="inverse-color">
          Like what you see? Sign up for the programme!
        </h3>
      </div>
      <a
        className="link-btn"
        href="https://forms.gle/Nu9NqEooFAGSF8P58"
        style={{
          background: '#2980B9',
          color: 'white',
          marginRight: '20px',
        }}
      >
        Apply
      </a>
      <h2 className="inverse-color" style={{ paddingTop: '50px' }}>
        FAQs:
      </h2>
      <MentorFAQ />
    </div>

  </div>
);
export default MentorshipPage;
