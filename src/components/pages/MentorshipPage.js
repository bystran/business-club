import React from 'react';
import '../../sass/pages/mentorshipPage.scss';
import Underlined from '../Underlined';

const MentorshipPage = () => (
  <div className="mentorship-page-wrapper">
    <header className="mentorship-header">
      <Underlined>
        <h1>
          Mentorship Programme
        </h1>
      </Underlined>
    </header>

    <div className="mentorship-description">
      <div className="desc-name">
        <Underlined>
          What is the GUBC mentorship programme?
        </Underlined>
      </div>
      <div className="desc-cont">
        The programme will give you the unique opportunity to set and pursue
        goals of your choosing with an experienced mentor who will offer guidance,
        advice, and insights to help you achieve them faster.
        We do not restrict the nature of the goals you wish to pursue –
        if you wish to launch a startup, land the internship of your dreams,
        or score stellar academic results, a mentor will help you with just that.
      </div>

      <div className="desc-name">
        <Underlined>
          What does the mentoring programme look like?
        </Underlined>
      </div>
      <div className="desc-cont">
        The programme will give you the unique opportunity to
        set and pursue goals of your choosing with an experienced
        mentor who will offer guidance, advice, and insights to help you
        achieve them faster.
        We do not restrict the nature of the goals you wish to pursue –
        if you wish to launch a startup, land the internship of your dreams,
        or score stellar academic results, a mentor will help you with just that.
      </div>

      <div className="desc-name">
        <Underlined>
          What will be expected of me?
        </Underlined>
      </div>
      <div className="desc-cont">
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
        <Underlined>
          What is the mentorship programme NOT for:
        </Underlined>
      </div>
      <div className="desc-cont">
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
    </div>


    <div className = "mentorship-link">
      <a href="https://forms.gle/Nu9NqEooFAGSF8P58">   Click Here to Apply To Our Mentorship programme </a>
    </div>

    <div className="mentorship-description">
      <div className="desc-name">
        
      </div>
    </div>

  </div>
);
export default MentorshipPage;
