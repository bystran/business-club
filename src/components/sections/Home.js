import React from 'react';
import Paragraph from '../Paragraph';
import '../../sass/sections/Home.scss';
import LinkButton from '../LinkButton';

const Home = () => (
  <div className="section home">

    <div className="home-p">
      <div className="p-wrapper">
        <Paragraph
          darkMonde
          heading={(
            <>
              <h2>Business club</h2>
              <h1>We get you further</h1>
            </>
)}
        >
          Established in 2010, the Glasgow University Business Club provides
          students with academic, professional and social opportunities to form
          a strong network of Business enthusiasts. In collaboration with diverse
          partner companies, we organise a wide range of events, which foster the
          development of professional competencies and skills that are needed to
          succeed in today&apos;s highly competitive job market.

        </Paragraph>
        <LinkButton href="#">
          Join the Club
        </LinkButton>
        <LinkButton
          href="#"
          color="white"
          background="rgba(44, 62, 80, 0.45)"
        >
          Learn more
        </LinkButton>

      </div>

    </div>

    <div className="home-p second-home-p">

      <Paragraph
        darkMonde
        heading="What we do"
      >
        As a member, you are invited to join one of the largest
        academic societies on campus for its Industry Insight Programme.
        This includes a series of interactive talks and workshops through
        which students shall gain an insight into a particular industry
        or type of career.

      </Paragraph>
    </div>

  </div>
);

export default Home;
